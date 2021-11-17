// 139, 146

import React, { Fragment, useContext } from "react";
import CartContext from "../../store/cart-context";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = ({ toggleShowCart }) => {
  // 146
  const cartContext = useContext(CartContext);
  // 146
  const totalAmount = `$${cartContext.totalAmount.toFixed(2)}`;
  const hasItems = cartContext.items.length > 0;

  const cartItemAddHandler = (item) => {
    cartContext.addItem({ ...item, amount: 1 });
    console.log("ITEM", item);
  };
  const cartItemRemoveHandler = (id) => {
    cartContext.removeItem(id);
  };

  console.log("cartContext", cartContext);

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartContext.items.map((cartItem) => {
        return (
          <CartItem
            key={cartItem.id}
            cartItem={cartItem}
            onAdd={cartItemAddHandler.bind(null, cartItem)}
            onRemove={cartItemRemoveHandler.bind(null, cartItem.id)}
          />
        );
      })}
    </ul>
  );
  return (
    <Fragment>
      <Modal toggleShowCart={toggleShowCart}>
        {cartItems}
        <div className={classes.total}>
          <span>Total Amount</span>
          <span>{totalAmount}</span>
        </div>
        <div className={classes.actions}>
          <button className={classes["button--alt"]} onClick={toggleShowCart}>
            Close
          </button>
          {hasItems && <button className={classes["button"]}>Order</button>}
        </div>
      </Modal>
    </Fragment>
  );
};

export default Cart;
