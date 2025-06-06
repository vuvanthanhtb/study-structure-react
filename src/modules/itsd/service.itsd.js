import { API_METHODS } from "shared/utils";
import apiPath from "./endpoint.itsd";
import RequestService from "shared/axios";
import {
  CreateUserModel,
  SearchUserModel,
  UpdateUserModel,
} from "./model.itsd";

class ItsdService {
  #service = null;

  constructor() {
    this.#service = new RequestService();
  }

  create = async (data) => {
    try {
      const response = await this.#service.methodRequest(
        apiPath.create,
        data,
        CreateUserModel,
        API_METHODS.POST
      );
      return response;
    } catch (error) {
      return error;
    }
  };

  update = async (data) => {
    try {
      const response = await this.#service.methodRequest(
        apiPath.update,
        data,
        UpdateUserModel,
        API_METHODS.POST
      );
      return response;
    } catch (error) {
      return error;
    }
  };

  detail = async (data) => {
    try {
      const response = await this.#service.methodRequest(
        apiPath.detail,
        data,
        null,
        API_METHODS.GET
      );
      return response;
    } catch (error) {
      return error;
    }
  };

  search = (data) =>
    this.#service.methodRequest(
      apiPath.search,
      data,
      SearchUserModel,
      API_METHODS.GET
    );
}

export default ItsdService;
