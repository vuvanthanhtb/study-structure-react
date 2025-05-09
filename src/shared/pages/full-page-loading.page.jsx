import ReactDOM from "react-dom";
import { useSelector } from "react-redux";
import styles from "./_loading.module.scss";

const FullPageLoading = (props) => {
  const {
    // isNotLoginScreen,
    opacity,
    target,
  } = props;

  const { totalLoadingProcess } = useSelector((state) => state.app);

  if (totalLoadingProcess === 0) {
    // This is no on-going loading, disable loading indicator
    return "";
  }
  // }

  let opacityNum = 0.9;
  if (opacity) {
    // allow caller to change opacity
    opacityNum = opacity;
  }

  let gridContent = document.querySelector(target);
  if (!gridContent) {
    gridContent = document.querySelector("#root");
  }

  const backgroundColor = {
    backgroundColor: `rgba(225, 225, 225, ${opacityNum})`,
  };

  const loadingPanel = (
    <div style={backgroundColor} className={styles["lds-ellipsis"]}>
      <div />
      <div />
      <div />
      <div />
    </div>
  );

  return ReactDOM.createPortal(loadingPanel, gridContent);
};

export default FullPageLoading;
