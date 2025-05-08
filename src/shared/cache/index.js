export const setCache = (id, data) => {
  localStorage.setItem(id, JSON.stringify(data));
};

export const getCache = (id) => {
  return JSON.parse(localStorage.getItem(id));
};

export const isCacheExists = (id) => {
  return localStorage.getItem(id) !== null;
};

export const clearCache = (id) => {
  localStorage.removeItem(id);
};

export const clearAllCache = () => {
  localStorage.clear();
};

export const getCurrentUser = () => {
  return getCache("CURRENT_USER");
};

export const getCurrentUserRoles = () => {
  return getCache("CURRENT_ROLES") || [];
};

export const setCurrentUser = (data) => {
  setCache("CURRENT_USER", data);
};

export const setCurrentUserRoles = (data) => {
  setCache("CURRENT_ROLES", data);
};

export const setCurrentToken = (data) => {
  setCache("TOKEN", data);
};

export const getCurrentToken = () => {
  return getCache("TOKEN");
};

export const hasAnyRequiredRole = (allowedRoles = []) => {
  if (allowedRoles.includes("ALL")) {
    return true;
  }
  const roles = getCurrentUserRoles();
  const { length } = roles;
  for (let i = 0; i < length; i++) {
    if (allowedRoles.includes(roles[i])) {
      return true;
    }
  }
  return false;
};
