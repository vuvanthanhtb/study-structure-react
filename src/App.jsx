import React from "react";
import { BrowserRouter, Outlet } from "react-router-dom";
import AppRoutes from "./app/routes";

const App = () => {
  return (
    <BrowserRouter>
      <AppRoutes />
      <Outlet />
    </BrowserRouter>
  );
};

export default App;
