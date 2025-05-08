import axios from "axios";
import API_METHODS from "shared/utils/api-method";
import { SYSTEM_BUSY } from "shared/utils/message";
import { authRouteConfig } from "app/routes/config";

class ApiProxyService {
  #axios_instance = null;
  #headers = {
    "Content-Type": "application/json",
    responseType: "json",
  };

  constructor() {
    this.#axios_instance = axios.create({
      baseURL: import.meta.env.VITE_APP_SERVER,
      timeout: 1000,
      withCredentials: true,
    });

    this.#axios_instance.interceptors.response.use(
      (response) => response,
      (error) => this.#errorHandler(error)
    );
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

  #errorHandler = async (error) => {
    if (error && error.response && error.response.status === 401) {
      window.location.href = authRouteConfig.login.path;
    }

    if (error && error.response) {
      return Promise.reject({
        status: error.response.status,
        message: error.response.data.message || SYSTEM_BUSY,
      });
    }
    return Promise.reject(error);
  };
}

export default ApiProxyService;
