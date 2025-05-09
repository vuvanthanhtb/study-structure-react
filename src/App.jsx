
import { BrowserRouter, Outlet } from "react-router-dom";
import AppRoutes from "./app/routes";
import FullPageLoading from "shared/pages/full-page-loading.page";
import "./styles/global.scss";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <AppRoutes />
        <Outlet />
      </BrowserRouter>
      <FullPageLoading />
    </>
  );
};

export default App;
