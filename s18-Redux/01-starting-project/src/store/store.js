// ..., 237

import { createStore } from "redux";
import types from "../types/types";

const counterReducer = (state = { counter: 0, showCounter: true }, action) => {
  switch (action.type) {
    case types.increment:
      return { ...state, counter: state.counter + action.payload };

    case types.decrement:
      return { ...state, counter: state.counter - 1 };

    case types.toggle:
      return { ...state, showCounter: !state.showCounter };

    default:
      return state;
  }
};

const store = createStore(counterReducer);

export default store;
