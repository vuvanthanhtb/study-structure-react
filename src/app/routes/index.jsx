import { lazy, Suspense, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import PrivateLayout from "shared/layout/private.layout";
import { userRouteConfig, authRouteConfig, homeRouteConfig } from "./config";
import FullPageLoading from "shared/components/full-page-loading.component";
import BootStrapper from "./boot-strapper";

const NotFoundPage = lazy(() =>
  import("shared/components/not-found.component")
);

const LoginPage = lazy(() => import("features/auth/page/login.page"));
const HomePage = lazy(() => import("features/home/page"));
const SearchUsersPage = lazy(() =>
  import("features/user/page/search-users.page")
);
const CreateUserPage = lazy(() =>
  import("features/user/page/create-user.page")
);
const UpdateUserPage = lazy(() =>
  import("features/user/page/update-user.page")
);
const DetailUserPage = lazy(() =>
  import("features/user/page/detail-user.page")
);

const AppRoutes = (props) => {
  useEffect(() => {
    BootStrapper.initialize();
    BootStrapper.setDataToRunApplicationInLocal();
  }, []);

  return (
    <Suspense fallback={<FullPageLoading />}>
      <Routes>
        <Route path={authRouteConfig.login.path} element={<LoginPage />} />
        <Route
          path={homeRouteConfig.home.path}
          element={
            <PrivateLayout
              allowedRoles={homeRouteConfig.home.roles}
              title="Trang chủ"
            >
              <HomePage props={props} />
            </PrivateLayout>
          }
        />
        <Route
          path={userRouteConfig.search.path}
          element={
            <PrivateLayout
              allowedRoles={userRouteConfig.search.roles}
              title="Tìm kiếm tài khoản"
            >
              <SearchUsersPage props={props} />
            </PrivateLayout>
          }
        />
        <Route
          path={userRouteConfig.create.path}
          element={
            <PrivateLayout
              allowedRoles={userRouteConfig.create.roles}
              title="Tạo mới tài khoản"
            >
              <CreateUserPage props={props} />
            </PrivateLayout>
          }
        />
        <Route
          path={userRouteConfig.update.path}
          element={
            <PrivateLayout
              allowedRoles={userRouteConfig.update.roles}
              title="Cập nhật tài khoản"
            >
              <UpdateUserPage props={props} />
            </PrivateLayout>
          }
        />
        <Route
          path={userRouteConfig.detail.path}
          element={
            <PrivateLayout
              allowedRoles={userRouteConfig.detail.roles}
              title="Thông tin chi tiết tài khoản"
            >
              <DetailUserPage props={props} />
            </PrivateLayout>
          }
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
