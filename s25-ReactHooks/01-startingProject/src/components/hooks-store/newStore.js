import { useEffect, useState } from "react";

// 371
let globalState = {};

let listeners = [];

let actions = {};

export const useStore = () => {
  const [, setstate] = useState(globalState);

  //   372
  const dispatch = (actionIdentifier, payload) => {
    const newState = actions[actionIdentifier](globalState, payload);
    globalState = {
      ...globalState,
      ...newState,
    };

    for (const listener of listeners) {
      listener(globalState);
    }
  };

  useEffect(() => {
    listeners.push(setstate);
    return () => {
      listeners = listeners.filter((listener) => listener !== setstate);
    };
  }, []);

  return [globalState, dispatch];
};

export const initStore = (userActions, initialState) => {
  if (initialState) {
    globalState = { ...globalState, initialState };
  }
  actions = { ...actions, ...userActions };
};
