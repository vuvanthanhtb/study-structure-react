import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";
import HeaderLayout from "./header.layout";
import { getCurrentUser, hasAnyRequiredRole } from "shared/cache";
import { authRouteConfig } from "app/routes/config";

const PrivateLayout = (props) => {
  const { allowedRoles, children, title = "App 12345" } = props;
  const currentUser = getCurrentUser();
  const isAllow = hasAnyRequiredRole(allowedRoles);

  useEffect(() => {
    document.title = title;
  }, [title]);

  if (!currentUser) {
    return <Navigate to={authRouteConfig.login.path} />;
  }

  if (!isAllow) {
    return (
      <div>
        <HeaderLayout />
        <div>
          Bạn không có quyền truy cập vào trang này, vui lòng liên hệ quản trị
          viên
        </div>
        <FooterLayout />
      </div>
    );
  }

  return (
    <div>
      <HeaderLayout />
      <main>{children}</main>
    </div>
  );
};

export default PrivateLayout;
