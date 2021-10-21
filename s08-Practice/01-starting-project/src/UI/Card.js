// 90
import React from "react";
import styles from "../index.module.css";

export const Card = ({ children, className }) => {
  return <div className={`${styles.card} ${className}`}>{children}</div>;
};
