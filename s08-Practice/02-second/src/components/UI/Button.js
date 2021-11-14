import React from "react";

export const Button = ({ className, type, clickHandler, children }) => {
  return (
    <button className={className} type={type} onClick={clickHandler}>
      {children}
    </button>
  );
};
