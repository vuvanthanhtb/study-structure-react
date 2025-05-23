import { Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { homeRouteConfig } from "shared/routes";
import FormSubmit from "shared/form/form-submit";
import { config, initialValues } from "./config.login";
import { validationSchema } from "./validation.login";
import styles from "./_login.module.scss";
import { loginUser } from "../../slice.auth";

const LoginPage = () => {
  const dispatch = useDispatch();
  document.title = "Đăng nhập";
  const { currentUser } = useSelector((state) => state.auth);

  if (currentUser) {
    return <Navigate to={homeRouteConfig.home.path} />;
  }

  const onSubmit = (values) => {
    dispatch(loginUser(values));
  };

  return (
    <div className={styles["login-container"]}>
      <div className={styles["login-container__left"]}>
        <img
          src="https://ib.gpbank.com.vn/GIB/Images/IB-Intro.jpg"
          alt="GBBank"
        />
      </div>
      <div className={styles["login-container__right"]}>
        <FormSubmit
          config={config}
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        />
      </div>
    </div>
  );
};

export default LoginPage;
