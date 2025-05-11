import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { HeaderComponent, SidebarComponent } from "../components";
import { getCurrentUser, hasAnyRequiredRole } from "shared/cache";
import { authRouteConfig } from "shared/routes";
import AccessDenied from "../components/access-denied";
import styles from "./_private.module.scss";

const PrivateLayout = (props) => {
  const { allowedRoles, children, title = "App 12345" } = props;
  const currentUser = getCurrentUser();
  const isAllow = hasAnyRequiredRole(allowedRoles);

  console.log(999999, isAllow);
  

  useEffect(() => {
    document.title = title;
  }, [title]);

  if (!currentUser) {
    return <Navigate to={authRouteConfig.login.path} />;
  }

  return (
    <div className={styles["private-container"]}>
      <SidebarComponent />
      <div className={styles["main-container"]}>
        <HeaderComponent {...props} />
        <div className={styles["main-container__main"]}>
          {isAllow && children}
          {!isAllow && <AccessDenied />}
        </div>
      </div>
    </div>
  );
};

export default PrivateLayout;
