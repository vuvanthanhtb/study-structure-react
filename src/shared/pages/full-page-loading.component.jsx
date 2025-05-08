import ReactDOM from "react-dom";
import React from "react";
import { useSelector } from "react-redux";

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

  let opacityNum = 0.3;
  if (opacity) {
    // allow caller to change opacity
    opacityNum = opacity;
  }

  let gridContent = document.querySelector(target);
  if (!gridContent) {
    gridContent = document.querySelector("#root");
  }

  const backgroundColor = {
    backgroundColor: `rgba(128, 128, 128, ${opacityNum})`,
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: 10000,
  };

  const loadingPanel = (
    <div style={backgroundColor}>
      <div />
      <div />
      <div />
      <div />
    </div>
  );

  return ReactDOM.createPortal(loadingPanel, gridContent);
};

export default FullPageLoading;
