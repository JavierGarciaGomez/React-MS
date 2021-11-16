// 133

import React, { Fragment } from "react";
import mealsImg from "../../assets/meals.jpg";

import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

export const Header = ({ toggleShowCart }) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>React Meals</h1>
        <HeaderCartButton onClick={toggleShowCart}></HeaderCartButton>
      </header>
      <div>
        <img className={classes["main-image"]} src={mealsImg} alt="img"></img>
      </div>
    </Fragment>
  );
};
