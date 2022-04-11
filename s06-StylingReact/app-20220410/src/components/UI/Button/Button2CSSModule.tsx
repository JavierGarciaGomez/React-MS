import React, { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import styles from "./Button2CSSModule.module.css";

interface Props
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {}
// const Button = (props: Props) => {
//   return (
// <button type={props.type} className="button" onClick={props.onClick}>
//   {props.children}
// </button>
//   );
// };

export const Button2CSSModule = (props: Props) => {
  return (
    <button type={props.type} className={styles.button} onClick={props.onClick}>
      {props.children}
    </button>
  );
};
