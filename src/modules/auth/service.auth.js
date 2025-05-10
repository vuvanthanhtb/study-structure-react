import { API_METHODS } from "shared/utils";
import apiPath from "./endpoint.auth";
import RequestService from "shared/axios";
import { loginModel } from "./model.auth";

class AuthService {
  #service = null;

  constructor() {
    this.#service = new RequestService();
  }

  loginUser = (data) =>
    this.#service.methodRequest(
      apiPath.login,
      data,
      loginModel,
      API_METHODS.POST
    );
}

export default AuthService;
