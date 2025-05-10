import styles from "./_sidebar.module.scss";
import { useMatch, Link } from "react-router-dom";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import HomeIcon from "@mui/icons-material/Home";
import ViewHeadlineIcon from "@mui/icons-material/ViewHeadline";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import AppIcon from "shared/assets/gb-bank-icon.svg";
import { useSidebarContext } from "app/context/sidebar.context";
import { homeRouteConfig } from "shared/routes";
import { SIDEBAR_CONFIG } from "./sidebar.config";

const SidebarComponent = () => {
  const { collapsed, setCollapsed } = useSidebarContext();

  const isActivateUrl = (path) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const match = useMatch(path);
    return !!match;
  };

  return (
    <Sidebar
      backgroundColor="linear-gradient(181.81deg, #1D4289 0.97%, #00B78B 99.77%)"
      collapsed={collapsed}
      width="350px"
      className={styles["sidebar-container"]}
    >
      <div className={styles["sidebar-header"]}>
        {collapsed && (
          <button onClick={() => setCollapsed(false)}>
            <ViewHeadlineIcon />
          </button>
        )}
        {!collapsed && (
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <img src={AppIcon} alt="GBBank" />
            <button onClick={() => setCollapsed(true)}>
              <KeyboardArrowLeftIcon />
            </button>
          </div>
        )}
      </div>
      <div
        className={
          collapsed
            ? styles["sidebar-content-collapsed"]
            : styles["sidebar-content"]
        }
      >
        <Menu>
          <MenuItem
            icon={<HomeIcon />}
            component={<Link to={homeRouteConfig.home.path} />}
            className={
              isActivateUrl(homeRouteConfig.home.path) ? styles["active"] : ""
            }
          >
            Trang chủ
          </MenuItem>
          <hr className={styles["hr-custom"]} />
          {SIDEBAR_CONFIG.map((item, index) => {
            if (!item.isActivate) {
              return null;
            }

            if (item.paths.length !== 0) {
              return (
                <SubMenu
                  label={item.label}
                  icon={item.icon}
                  key={`sidebar-${9999 + index}`}
                >
                  {item.paths.map((el, idx) => {
                    if (!el.isActivate) {
                      return null;
                    }

                    const active = isActivateUrl(el.path);

                    return (
                      <MenuItem
                        key={`sidebar-${9999 + index}-${idx}`}
                        className={active ? styles["active"] : ""}
                        component={<Link to={el.path} />}
                      >
                        {el.label}
                      </MenuItem>
                    );
                  })}
                </SubMenu>
              );
            }

            const active = isActivateUrl(item.path);

            return (
              <MenuItem
                icon={item.icon}
                key={`sidebar-${9999 + index}`}
                className={active ? styles["active"] : ""}
                component={<Link to={item.path} />}
              >
                {item.label}
              </MenuItem>
            );
          })}
        </Menu>
      </div>
    </Sidebar>
  );
};

export default SidebarComponent;
