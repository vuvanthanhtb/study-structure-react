import { DateTime } from "luxon";
import ATTR_TYPE from "../utils/attr-data-type";

const mappingRequest = (model, data) => {
  if (!data) {
    return null;
  }

  const parsedData = {};
  model.forEach((item) => {
    const clientData = data[item.client];
    const serviceKey = item.service;
    if (clientData) {
      if (item.type === ATTR_TYPE.STRING) {
        parsedData[serviceKey] = clientData;
      } else if (item.type === ATTR_TYPE.NUMBER) {
        parsedData[serviceKey] = Number(clientData);
      } else if (item.type === ATTR_TYPE.BOOLEAN) {
        parsedData[serviceKey] = Boolean(clientData);
      } else if (item.type === ATTR_TYPE.DATE) {
        parsedData[serviceKey] = DateTime.fromISO(clientData).toFormat(
          item.format
        );
      }
    } else {
      if (item.isRequired) {
        throw new Error(
          `Thiếu trường: ${item.client} trong dữ liệu yêu cầu`
        );
      }
    }
  });
  return parsedData;
};

export default mappingRequest;
