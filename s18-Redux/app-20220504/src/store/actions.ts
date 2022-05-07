export const incrementCounter = () => ({ type: "ADD" });

export const decrementCounter = () => ({ type: "SUBSTRACT" });

export const increaseCounterByValue = (value: number) => ({
  type: "INCREASE_BY_VALUE",
  payload: value,
});

export const toggleCounter = () => ({
  type: "TOGGLE_COUNTER",
});
