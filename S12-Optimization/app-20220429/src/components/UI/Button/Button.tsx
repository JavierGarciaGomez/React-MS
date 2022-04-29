import React from "react";
import classes from "./Button.module.css";

type Props = {
  className?: string;
  onClick: () => void;
  type?: "submit" | "reset" | "button";
  disabled?: boolean;
  children: JSX.Element | string;
};

const Button = (props: Props) => {
  console.log("BUTTON, running");
  return (
    <button
      type={props.type || "button"}
      className={`${classes.button} ${props.className}`}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default React.memo(Button);
