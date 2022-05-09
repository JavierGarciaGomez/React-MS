import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartItem, CartState, Product } from "../interfaces/interfaces";

const initialState: CartState = {
  items: [],
  totalQuantity: 0,
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    replaceCart(state, action: PayloadAction<CartState>) {
      state.totalQuantity = action.payload.totalQuantity;
      state.items = action.payload.items;
    },
    addItemToCart(state, action: PayloadAction<Product>) {
      const newItem = action.payload;
      const existingItem = state.items.find(
        (cartItem) => cartItem.id === newItem.id
      );
      if (existingItem) {
        existingItem.qty++;
        existingItem.totalPrice = existingItem.totalPrice + newItem.price;
      } else {
        state.items.push({ ...newItem, qty: 1, totalPrice: newItem.price });
      }
      state.totalQuantity++;
      state.totalAmount = state.totalAmount + newItem.price;
    },
    removeItemFromCart(state, action: PayloadAction<string>) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      state.totalQuantity--;

      if (existingItem) {
        if (existingItem.qty === 1) {
          state.items = state.items.filter((item) => item.id !== id);
        } else {
          existingItem.qty--;
          existingItem.totalPrice =
            existingItem.totalPrice - existingItem.price;
        }
      }
    },
  },
});

export const cartActions = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
