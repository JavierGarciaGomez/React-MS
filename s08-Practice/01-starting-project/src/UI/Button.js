// 91
import React from "react";
import styles from "../index.module.css";

export const Button = ({ type, onClick, children }) => {
  return (
    <button className={styles.button} type={type || "button"} onClick={onClick}>
      {children}
    </button>
  );
};
