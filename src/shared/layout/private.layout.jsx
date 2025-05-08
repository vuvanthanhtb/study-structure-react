import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";
import HeaderComponent from "../components/header";
import SidebarComponent from "../components/sidebar";
import { getCurrentUser, hasAnyRequiredRole } from "shared/cache";
import { authRouteConfig } from "app/routes/config";
import styles from"./private.module.scss";

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
        <HeaderComponent />
        <div>
          Bạn không có quyền truy cập vào trang này, vui lòng liên hệ quản trị
          viên
        </div>
      </div>
    );
  }

  return (
    <div className={styles["private-container"]}>
      <HeaderComponent />
      <div className={styles["main-container"]}>
        <SidebarComponent />
        <main>{children}</main>
      </div>
    </div>
  );
};

export default PrivateLayout;
