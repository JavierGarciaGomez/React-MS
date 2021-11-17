// 137, 145
import classes from "./Input.module.css";
import React, { forwardRef } from "react";

// 145 adding forwardRef
const Input = forwardRef(({ inputData }, ref) => {
  const { label, input } = inputData;
  const { id } = input;
  return (
    <div className={classes.input}>
      <label htmlFor={id}>{label}</label>
      <input ref={ref} {...input}></input>
    </div>
  );
});

export default Input;
