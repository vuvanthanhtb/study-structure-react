import API_METHODS from "shared/utils/api-method";
import apiPath from "./endpoint.user";
import RequestService from "services/request.service";
import {
  CreateUserModel,
  SearchUserModel,
  UpdateUserModel,
} from "./user.model";

class UserService {
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

  delete = async (data) => {
    try {
      const response = await this.#service.methodRequest(
        apiPath.delete,
        data,
        null,
        API_METHODS.DELETE
      );
      return response;
    } catch (error) {
      return error;
    }
  };

  search = async (data) => {
    try {
      const response = await this.#service.methodRequest(
        apiPath.search,
        data,
        SearchUserModel,
        API_METHODS.GET
      );
      return response;
    } catch (error) {
      return error;
    }
  };
}

export default UserService;
