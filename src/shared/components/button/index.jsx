import clsx from "clsx";
import styles from "./_button.module.scss";

const ButtonComponent = (props) => {
  const {
    title,
    onClick,
    disabled = false,
    icon = null,
    className = {},
  } = props;
  console.log({className});
  
  return (
    <button
      className={clsx(styles["button-container"], className)}
      onClick={onClick}
      disabled={disabled}
    >
      {icon ? <img src={icon} alt="button" /> : ""}
      {title}
    </button>
  );
};

export default ButtonComponent;
