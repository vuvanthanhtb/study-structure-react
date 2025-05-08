import styles from "./_sidebar.module.scss";

const SidebarComponent = () => {
  return (
    <div className={styles["sidebar-container"]}>
      <ul>
        <li>Home</li>
        <li>Dashboard</li>
        <li>Settings</li>
      </ul>
    </div>
  );
};

export default SidebarComponent;
