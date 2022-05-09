import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./cartSlice";
import { UIReducer } from "./uiSlice";

export const store = configureStore({
  reducer: { UI: UIReducer, cart: cartReducer },
});

export type RootState = ReturnType<typeof store.getState>;
