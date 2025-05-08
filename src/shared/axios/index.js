import ApiProxyService from "./api-proxy.service";
import parseRequest from "shared/model/mapping-request.model";
import { API_METHODS } from "shared/utils";

class RequestService {
  #service = null;

  constructor() {
    this.#service = new ApiProxyService();
  }

  async methodRequest(endpoint, data, model, method = API_METHODS.GET, headers = {}) {
    try {
      const body = parseRequest(model, data);
      const response = await this.#service.methodRequest(
        endpoint,
        body,
        method,
        headers
      );
      return response.data;
    } catch (error) {
      return error;
    }
  }
}

export default RequestService;
