import React from "react";
import "./Card.css";

interface Props {
  children: React.ReactNode;
  className: string;
}
export const Card = (props: Props) => {
  const { children, className } = props;
  const classes = "card " + className;
  return <div className={classes}>{children}</div>;
};
