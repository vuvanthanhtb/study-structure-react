import PersonIcon from "@mui/icons-material/Person";
import TopicIcon from "@mui/icons-material/Topic";
import { userRouteConfig, homeRouteConfig } from "shared/routes";
import { hasAnyRequiredRole } from "shared/cache";

const isActivate_1 = hasAnyRequiredRole(userRouteConfig.search.roles);

export const SIDEBAR_CONFIG = [
  {
    label: "Quản lý tài khoản",
    icon: <PersonIcon />,
    isActivate: isActivate_1,
    paths: [
      {
        label: "Danh sách tài khoản",
        path: userRouteConfig.search.path,
        isActivate: isActivate_1,
      },
    ],
  },
  {
    label: "Tiết kiêm",
    icon: <TopicIcon />,
    path: homeRouteConfig.home.path,
    paths: [],
    isActivate: hasAnyRequiredRole(homeRouteConfig.home.roles),
  },
];
