// 134, 142, 149
import React, { useContext, useEffect, useState } from "react";
import CartContext from "../../store/cart-context";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = ({ onClick }) => {
  const cartCtx = useContext(CartContext);

  const numberOfCardItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);
  // 149
  const [btnIsHihglighted, setbtnIsHihglighted] = useState(false);

  const btnClasses = `${classes.button} ${
    btnIsHihglighted ? classes.bump : ""
  }`;

  useEffect(() => {
    if (cartCtx.items.length === 0) {
      return;
    }
    setbtnIsHihglighted(true);

    const timer = setTimeout(() => {
      setbtnIsHihglighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [cartCtx.items]);

  return (
    <button className={btnClasses} onClick={onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCardItems}</span>
    </button>
  );
};

export default HeaderCartButton;
