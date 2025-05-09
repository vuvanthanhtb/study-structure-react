import {API_METHODS} from "shared/utils";
import apiPath from "./endpoint.auth";
import RequestService from "shared/axios";
import { loginModel } from "./model.auth";

class AuthService {
  #service = null;

  constructor() {
    this.#service = new RequestService();
  }

  loginUser = async (data) => {
    try {
      const response = await this.#service.methodRequest(
        apiPath.login,
        data,
        loginModel,
        API_METHODS.POST
      );
      return response;
    } catch (error) {
      return error;
    }
  };

  logoutCurrentUser = async (data) => {
    try {
      const response = await this.#service.methodRequest(
        apiPath.logout,
        data,
        null,
        API_METHODS.POST
      );
      return response;
    } catch (error) {
      return error;
    }
  };
}

export default AuthService;
