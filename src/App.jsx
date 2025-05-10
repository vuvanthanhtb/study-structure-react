
import AppRoutes from "./app/routes";
import FullPageLoading from "shared/pages/full-page-loading.page";
import "./styles/global.scss";

const App = () => {
  return (
    <>
      <AppRoutes />
      <FullPageLoading />
    </>
  );
};

export default App;
