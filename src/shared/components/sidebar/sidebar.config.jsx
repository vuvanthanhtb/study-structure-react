import PersonIcon from "@mui/icons-material/Person";
import TopicIcon from "@mui/icons-material/Topic";
import { userRouteConfig, homeRouteConfig } from "shared/routes";

export const SIDEBAR_CONFIG = [
  {
    label: "Quản lý tài khoản",
    icon: <PersonIcon />,
    isActivate: true,
    paths: [
      {
        label: "Danh sách tài khoản",
        path: userRouteConfig.search.path,
        roles: userRouteConfig.search.roles,
        isActivate: false,
      },
      {
        label: "Danh sách 2",
        path: userRouteConfig.search.path,
        roles: [],
        isActivate: false,
      },
    ],
  },
  {
    label: "Tiết kiêm",
    icon: <TopicIcon />,
    path: homeRouteConfig.home.path,
    paths: [],
    roles: homeRouteConfig.home.roles,
    isActivate: true,
  },
];
