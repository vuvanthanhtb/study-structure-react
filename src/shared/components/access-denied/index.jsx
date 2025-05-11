import { Link } from "react-router-dom";
import { homeRouteConfig } from "shared/routes";
import styles from "./_access-denied.module.scss";

const AccessDenied = () => {
  return (
    <div className={styles["access-denied-wrapper"]}>
      <div className={styles["access-denied-box"]}>
        <h1>🚫 Bạn không có quyền truy cập vào trang này</h1>
        <p>Vui lòng liên hệ quản trị viên.</p>
        <Link
          to={homeRouteConfig.home.path}
          className={styles["back-home-link"]}
        >
          Quay lại trang chủ
        </Link>
      </div>
    </div>
  );
};

export default AccessDenied;
