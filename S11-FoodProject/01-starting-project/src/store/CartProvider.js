// 142, 144

import React, { useReducer, useState } from "react";
import { types } from "../types/types";
import CartContext from "./cart-context";

// 144
const defaultCartState = {
  items: [],
  totalAmount: 0,
};
// 144
const cartReducer = (state, action) => {
  switch (action.type) {
    case types.addItem:
      const updatedItems = [action.payload, ...state.items];
      const updatedTotalAmount =
        state.totalAmount + action.payload.price * action.payload.amount;

      return { items: updatedItems, totalAmount: updatedTotalAmount };

    default:
      return state;
  }
};

const CartProvider = ({ children }) => {
  // 144
  const [cartState, dispatchCart] = useReducer(cartReducer, defaultCartState);

  const addItemToCartHandler = (item) => {
    dispatchCart({ type: types.addItem, payload: item });
  };

  const removeItemFromCartHandler = (id) => {};

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
};

export default CartProvider;
