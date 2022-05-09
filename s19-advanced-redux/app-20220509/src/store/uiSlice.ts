import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Status } from "../interfaces/interfaces";

type UISliceState = {
  cartIsVisible: boolean;
  notification: Status;
};
const initialState: UISliceState = {
  cartIsVisible: false,
  notification: null!,
};

const UISlice = createSlice({
  name: "UI",
  initialState,
  reducers: {
    toggle(state) {
      state.cartIsVisible = !state.cartIsVisible;
    },
    showNotification(state, action: PayloadAction<Status>) {
      state.notification = {
        // status: action.payload.status,
        // title: action.payload.title,
        // message: action.payload.message,
        ...action.payload,
      };
    },
  },
});

export const UIActions = UISlice.actions;
export const UIReducer = UISlice.reducer;
