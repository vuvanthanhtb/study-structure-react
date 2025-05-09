import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { HeaderComponent, SidebarComponent } from "../components";
import { getCurrentUser, hasAnyRequiredRole } from "shared/cache";
import { authRouteConfig } from "shared/routes";
import styles from "./_private.module.scss";

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
        <div className={styles["main-container__sidebar"]}>
          <SidebarComponent />
        </div>
        <div className={styles["main-container__content"]}>{children}</div>
      </div>
    </div>
  );
};

export default PrivateLayout;
