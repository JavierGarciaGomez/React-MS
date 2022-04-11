import React, { Fragment } from "react";
import classes from "./Card.module.css";

interface Props {
  children: JSX.Element | JSX.Element[] | string;
  className?: string | undefined;
}
export const Card = ({ children, className }: Props) => {
  return <div className={`${classes.card} ${className}`}>{children}</div>;
};
