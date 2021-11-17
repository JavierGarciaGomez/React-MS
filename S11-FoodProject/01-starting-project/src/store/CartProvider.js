// 142, 144, 147

import React, { useReducer } from "react";
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
    case types.addItem: {
      console.log("startng to add");
      // 147
      const existingCartItemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );

      const existingCartItem = state.items[existingCartItemIndex];
      console.log("existing card item", existingCartItem);

      let updatedItems;

      if (existingCartItem) {
        console.log("yes is existing");
        const updatedItem = {
          ...existingCartItem,
          amount: existingCartItem.amount + action.payload.amount,
        };

        console.log("updated item", updatedItem);

        updatedItems = [...state.items];
        console.log("updated items", updatedItems);
        updatedItems[existingCartItemIndex] = updatedItem;
      } else {
        updatedItems = [action.payload, ...state.items];
      }

      const updatedTotalAmount =
        state.totalAmount + action.payload.price * action.payload.amount;

      console.log("state", updatedItems);

      return { items: updatedItems, totalAmount: updatedTotalAmount };
    }
    case types.removeItem: {
      const existingCartItemIndex = state.items.findIndex(
        (item) => item.id === action.payload
      );

      const existingCartItem = state.items[existingCartItemIndex];

      const updatedTotalAmount = state.totalAmount - existingCartItem.price;

      let updatedItems;

      if (existingCartItem.amount === 1) {
        updatedItems = state.items.filter((item) => item.id !== action.payload);
      } else {
        const updatedAmount = existingCartItem.amount - 1;
        updatedItems = [...state.items];
        updatedItems[existingCartItemIndex].amount = updatedAmount;
      }

      return { items: updatedItems, totalAmount: updatedTotalAmount };
    }
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

  const removeItemFromCartHandler = (id) => {
    console.log("dispatching remove");
    dispatchCart({ type: types.removeItem, payload: id });
  };

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
