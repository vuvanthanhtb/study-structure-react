import clsx from "clsx";
import styles from "./_button.module.scss";

const ButtonComponent = (props) => {
  const {
    title,
    onClick,
    disabled = false,
    icon = null,
    className = {},
    type = "button",
    style
  } = props;
  return (
    <button
      className={clsx(styles["button-container"], className)}
      onClick={onClick}
      disabled={disabled}
      type={type}
      style={style}
    >
      {icon ? <img src={icon} alt="button" /> : ""}
      {title}
    </button>
  );
};

export default ButtonComponent;
