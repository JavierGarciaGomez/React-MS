import React, { useReducer } from "react";
import { cartItem, CartState } from "../interfaces/Interfaces";
import CartContext from "./CartContext";
import { cartReducer } from "./cartReducer";

const INITIAL_STATE: CartState = {
  items: [],
  totalAmount: 0,
  // addItem: (item: cartItem) => {},
  // removeItem: (id: string) => {},
};

interface Props {
  children: JSX.Element | JSX.Element[];
}
export const CartProvider = ({ children }: Props) => {
  const [cartState, dispatch] = useReducer(cartReducer, INITIAL_STATE);
  const addItemToCartHandler = (item: cartItem) => {
    dispatch({ type: "ADD", payload: item });
  };
  const removeItemToCartHandler = (id: string) => {
    dispatch({ type: "REMOVE", payload: id });
  };

  const handleClearCart = () => {
    dispatch({ type: "CLEAR" });
  };

  return (
    <CartContext.Provider
      value={{
        cartState,
        addItem: addItemToCartHandler,
        removeItem: removeItemToCartHandler,
        clearCart: handleClearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
