import { ATTR_TYPE, DATE_FORMAT_YYYY_MM_DD_HH_MM } from "../utils";

class AttrModel {
  constructor(
    service,
    client,
    isRequired,
    type = ATTR_TYPE.STRING,
    format = DATE_FORMAT_YYYY_MM_DD_HH_MM
  ) {
    this.service = service;
    this.client = client;
    this.isRequired = isRequired;
    this.type = type;
    this.format = format;
  }
}

export default AttrModel;
