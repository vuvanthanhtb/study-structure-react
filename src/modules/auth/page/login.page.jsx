import { Navigate } from "react-router-dom";
import { getCurrentToken } from "shared/cache";
import { homeRouteConfig } from "shared/routes";

const LoginPage = () => {
  if (getCurrentToken()) {
    return <Navigate to={homeRouteConfig.home.path} />;
  }

  return (
    <div>
      <h1>Login Page</h1>
      <p>Please enter your credentials to log in.</p>
      {/* Add your login form here */}
    </div>
  );
};

export default LoginPage;
