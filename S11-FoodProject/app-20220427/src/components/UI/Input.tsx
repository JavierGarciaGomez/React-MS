import React from "react";
import classes from "./Input.module.css";

type Props = {
  input: {
    id: string;
    type: string;
    min: number;
    max: number;
    step: number;
    defaultValue: number;
  };
  label: string;
};

const Input = React.forwardRef<HTMLInputElement, Props>((props: Props, ref) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input ref={ref} {...props.input} />
    </div>
  );
});

export default Input;
