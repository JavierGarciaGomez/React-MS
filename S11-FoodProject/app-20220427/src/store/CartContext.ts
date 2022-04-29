import React from "react";
import { cartItem, CartState } from "../interfaces/Interfaces";

type CartContextProps = {
  cartState: CartState;
  addItem: (item: cartItem) => void;
  removeItem: (id: string) => void;
};

const CartContext = React.createContext<CartContextProps>(
  {} as CartContextProps
);

export default CartContext;
