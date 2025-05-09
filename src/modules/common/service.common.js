import { API_METHODS } from "shared/utils";
import apiPath from "./endpoint.common";
import RequestService from "shared/axios";
import { logoutModel } from "./model.common";

class CommonService {
  #service = null;

  constructor() {
    this.#service = new RequestService();
  }

  logoutCurrentUser = async (data) =>
    await this.#service.methodRequest(
      apiPath.logout,
      data,
      logoutModel,
      API_METHODS.POST
    );
}

export default CommonService;
