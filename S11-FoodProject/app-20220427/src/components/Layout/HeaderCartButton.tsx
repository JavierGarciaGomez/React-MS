import { useContext, useEffect, useState } from "react";
import CartContext from "../../store/CartContext";

import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";

type Props = {
  onClick: () => void;
};

const HeaderCartButton = (props: Props) => {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
  const cartContext = useContext(CartContext);
  const { cartState } = cartContext;
  const { items } = cartState;
  const numberOfCartItems = items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  const btnClasses = `${classes.button} ${
    btnIsHighlighted ? classes.bump : ""
  }`;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtnIsHighlighted(true);

    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}> {numberOfCartItems} </span>
    </button>
  );
};

export default HeaderCartButton;
