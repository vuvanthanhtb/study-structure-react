import AppRoutes from "./app/routes";
import FullPageLoading from "shared/pages/full-page-loading.page";
import { SidebarProvider } from "./app/context/sidebar.context";
import "./styles/global.scss";

const App = () => {
  return (
    <SidebarProvider>
      <AppRoutes />
      <FullPageLoading />
    </SidebarProvider>
  );
};

export default App;
