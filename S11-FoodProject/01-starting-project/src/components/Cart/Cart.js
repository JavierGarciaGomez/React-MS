// 139

import React, { Fragment } from "react";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";

const Cart = ({ toggleShowCart }) => {
  const testCart = [
    { id: "c1", name: "Sushi", amount: 2, price: 12.99 },
    { id: "c2", name: "Sushi", amount: 2, price: 12.99 },
  ];
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {testCart.map((cartItem) => {
        return <div key={cartItem.id}>{cartItem.name}</div>;
      })}
    </ul>
  );
  return (
    <Fragment>
      <Modal toggleShowCart={toggleShowCart}>
        {cartItems}
        <div className={classes.total}>
          <span>Total Amount</span>
          <span>25</span>
        </div>
        <div className={classes.actions}>
          <button className={classes["button--alt"]} onClick={toggleShowCart}>
            Close
          </button>
          <button className={classes["button"]}>Order</button>
        </div>
      </Modal>
    </Fragment>
  );
};

export default Cart;
