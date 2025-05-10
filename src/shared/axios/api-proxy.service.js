import axios from "axios";
import { API_METHODS, SYSTEM_BUSY } from "shared/utils";
import { authRouteConfig } from "shared/routes";
import {
  getCurrentToken,
  getCurrentRefreshToken,
  setCurrentToken,
  clearAllCache,
} from "../cache";

class ApiProxyService {
  #axios_instance = null;
  #headers = {
    "Content-Type": "application/json",
    responseType: "json",
  };

  constructor() {
    this.#axios_instance = axios.create({
      baseURL: import.meta.env.VITE_API_URL,
      timeout: 10 * 60 * 1000,
      withCredentials: true,
    });

    this.isRefreshing = false;
    this.refreshSubscribers = [];
    this.maxRetries = 3;

    this.#axios_instance.interceptors.request.use(
      (config) => {
        const token = getCurrentToken();
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    this.#axios_instance.interceptors.response.use(
      (response) => response,
      async (error) => {
        const originalRequest = error.config;
        console.log(9000000, originalRequest._retryCount);
        

        // Kiểm tra lỗi 401 (Unauthorized) và chưa retry
        if (error.response?.status === 401 && !originalRequest._retry) {
          if (this.isRefreshing) {
            // Nếu đang refresh token, thêm request vào hàng đợi
            return new Promise((resolve) => {
              this.refreshSubscribers.push((token) => {
                originalRequest.headers.Authorization = `Bearer ${token}`;
                resolve(this.#axios_instance(originalRequest));
              });
            });
          }

          originalRequest._retry = true;
          this.isRefreshing = true;

          try {
            const newToken = await this.refreshAccessToken();
            this.isRefreshing = false;

            // Cập nhật token mới
            setCurrentToken(newToken);

            // Gọi lại các request đang chờ
            this.refreshSubscribers.forEach((callback) => callback(newToken));
            this.refreshSubscribers = [];

            // Cập nhật header và retry request gốc
            originalRequest.headers.Authorization = `Bearer ${newToken}`;
            return this.#axios_instance(originalRequest);
          } catch (refreshError) {
            this.isRefreshing = false;
            this.refreshSubscribers = [];
            // Xử lý lỗi refresh token (ví dụ: đăng xuất)
            this.handleRefreshTokenError();
            return Promise.reject(refreshError);
          }
        }

        // Xử lý retry cho các lỗi khác (ngoại trừ 401)
        if (!originalRequest._retryCount) {
          originalRequest._retryCount = 0;
        }

        if (originalRequest._retryCount < this.maxRetries) {
          originalRequest._retryCount += 1;
          await new Promise((resolve) => setTimeout(resolve, 1000));
          return this.#axios_instance(originalRequest);
        }

        return Promise.reject(error);
      }
    );
  }

  handleRefreshTokenError() {
    clearAllCache();
    window.location.href = authRouteConfig.login.path;
  }

  async refreshAccessToken() {
    const refreshToken = getCurrentRefreshToken();
    try {
      const response = await this.#axios_instance.post('/auth/refresh-token', {
        refreshToken,
      });
      return response.data.accessToken;
    } catch (error) {
      throw new Error('Refresh token failed', error);
    }
  }

  methodRequest = (endpoint, data, method, headers) => {
    let apiUrl = endpoint;
    const config = {
      headers: {
        ...this.#headers,
        ...headers,
      },
    };

    if (method === API_METHODS.GET) {
      if (data && typeof data === "object") {
        const queryString = new URLSearchParams(data).toString();
        apiUrl = `${endpoint}?${queryString}`;
      }
    } else if (method === API_METHODS.POST) {
      config["data"] = data;
    }

    return this.#axios_instance({
      method: method,
      url: apiUrl,
      ...config,
    });
  };
}

export default ApiProxyService;
