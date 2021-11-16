// 137
import classes from "./Input.module.css";
import React from "react";

const Input = ({ inputData }) => {
  const { label, input } = inputData;
  const { id } = input;
  return (
    <div className={classes.input}>
      <label htmlFor={id}>{label}</label>
      <input {...input}></input>
    </div>
  );
};

export default Input;
