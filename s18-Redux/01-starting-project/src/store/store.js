// ..., 237, 241

// import { createStore } from "redux";
// import types from "../types/types";
// 241
import { configureStore, createSlice } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";
import authSlice from "./authSlice";

// const counterReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case types.increment:
//       return { ...state, counter: state.counter + action.payload };

//     case types.decrement:
//       return { ...state, counter: state.counter - 1 };

//     case types.toggle:
//       return { ...state, showCounter: !state.showCounter };

//     default:
//       return state;
//   }
// };

// ..., 242
const store = configureStore({
  reducer: { counter: counterSlice, auth: authSlice },
});

// const store = configureStore({ reducer: { counter: counterSlice.reducer } });

// 243

export default store;
