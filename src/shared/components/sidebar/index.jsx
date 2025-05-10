import styles from "./_sidebar.module.scss";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import ViewHeadlineIcon from "@mui/icons-material/ViewHeadline";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import TopicIcon from '@mui/icons-material/Topic';
import AppIcon from "shared/assets/gb-bank-icon.svg";
import { useSidebarContext } from "app/context/sidebar.context";

const SidebarComponent = () => {
  const { collapsed, setCollapsed } = useSidebarContext();
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
        <Menu
          menuItemStyles={{
            button: {
              [`&.active`]: {
                backgroundColor: "#13395e",
                color: "#b6c8d9",
              },
            },
          }}
        >
          <MenuItem icon={<HomeIcon />}>Trang chủ</MenuItem>
          <hr className={styles["hr-custom"]} />
          <SubMenu label="Quản lý tài khoản" icon={<PersonIcon />}>
            <MenuItem> Pie charts </MenuItem>
            <MenuItem> Line charts </MenuItem>
          </SubMenu>
          <MenuItem icon={<TopicIcon />}>Documentation</MenuItem>
        </Menu>
      </div>
    </Sidebar>
  );
};

export default SidebarComponent;
