export const userRouteConfig = {
  search: {
    path: "/user/search",
    roles: ["admin", "user"],
  },
  create: {
    path: "/user/create",
    roles: ["admin"],
  },
  update: {
    path: "/user/update",
    roles: ["admin"],
  },
  detail: {
    path: "/user/detail",
    roles: ["admin"],
  },
};
