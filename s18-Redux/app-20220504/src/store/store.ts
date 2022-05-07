import { configureStore, createSlice } from "@reduxjs/toolkit";
import { createStore } from "redux";
import { toggleCounter } from "./actions";

// COMMON

const initialCounterState = {
  counter: 0,
  showCounterField: false,
};

const initialAuthState = {
  isAuthenticated: false,
};

// FIRST STORE
export type CounterState = {
  counter: number;
  showCounterField: boolean;
};
type ActionType =
  | { type: "ADD" }
  | { type: "SUBSTRACT" }
  | { type: "INCREASE_BY_VALUE"; payload: number }
  | { type: "TOGGLE_COUNTER" };

// const counterReducer = (
//   state: CounterState = initialCounterState,
//   action: ActionType
// ) => {
//   switch (action.type) {
//     case "ADD":
//       return { ...state, counter: state.counter + 1 };

//     case "SUBSTRACT":
//       return { ...state, counter: state.counter };

//     case "INCREASE_BY_VALUE":
//       return { ...state, counter: state.counter + action.payload };

//     case "TOGGLE_COUNTER":
//       return { ...state, showCounterField: !state.showCounterField };

//     default:
//       return state;
//   }
//   return state;
// };

// export const store = createStore(counterReducer, initialCounterState);

// SECOND STORE: REDUX TOOLKIT

const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggleCounter(state) {
      state.showCounterField = !state.showCounterField;
    },
  },
});

const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

export const store2 = configureStore({
  reducer: { newCounter: counterSlice.reducer, auth: authSlice.reducer },
});

export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;
