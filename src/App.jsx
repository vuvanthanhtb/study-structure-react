import React from "react";
import { BrowserRouter, Outlet } from "react-router-dom";
import AppRoutes from "./app/routes";
import FullPageLoading from "shared/pages/full-page-loading.page";

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
