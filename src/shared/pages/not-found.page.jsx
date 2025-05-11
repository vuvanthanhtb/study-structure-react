import { Link } from "react-router-dom";
import { homeRouteConfig, authRouteConfig } from "shared/routes";
import styles from "./_not-found.module.scss";

const NotFoundPage = () => {
  return (
    <div className={styles["not-found-container"]}>
      <main className={styles["bsod"]}>
        <h1 className={styles["neg-title"]}>
          <span className={styles["bg"]}>Error - 404</span>
        </h1>
        <p>An error has occurred, to continue:</p>
        <p>
          * Return to our homepage.
          <br />* Send us an e-mail about this error and try later.
        </p>
        <nav className={styles["nav"]}>
          <Link to={homeRouteConfig.home.path} className={styles["link"]}>
            home
          </Link>
          &nbsp;|&nbsp;
          <Link to={authRouteConfig.login.path} className={styles["link"]}>
            login
          </Link>
        </nav>
      </main>
    </div>
  );
};

export default NotFoundPage;
