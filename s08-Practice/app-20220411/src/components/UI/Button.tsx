import React, { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import classes from "./Button.module.css";

interface Props
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {}

export const Button = (props: Props) => {
  const { children, type } = props;
  return (
    <button
      className={classes.button}
      type={type || "button"}
      onClick={props.onClick}
    >
      {children}
    </button>
  );
};
