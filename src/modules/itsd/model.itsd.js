import { AttrModel } from "shared/model";

export const SearchUserModel = [
  new AttrModel("username", "username"),
  new AttrModel("role", "role"),
  new AttrModel("pageIndex", "pageIndex"),
  new AttrModel("pageSize", "pageSize"),
];

export const CreateUserModel = [
  new AttrModel("passenger_name", "passenger_name", true),
  new AttrModel("phone_number", "phone_number", true),
  new AttrModel("departure_station", "departure_station", true),
  new AttrModel("arrival_station", "arrival_station", true),
  new AttrModel("departure_date", "departure_date", true),
];

export const UpdateUserModel = [
  new AttrModel("passenger_name", "passenger_name", true),
  new AttrModel("phone_number", "phone_number", true),
  new AttrModel("departure_station", "departure_station", true),
  new AttrModel("arrival_station", "arrival_station", true),
  new AttrModel("departure_date", "departure_date", true),
];
