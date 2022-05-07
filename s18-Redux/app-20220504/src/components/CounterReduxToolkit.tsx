import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrementCounter,
  increaseCounterByValue,
  incrementCounter,
  toggleCounter,
} from "../store/actions";
import { counterActions, CounterState } from "../store/store";
import classes from "./Counter.module.css";

export const CounterReduxToolkit = () => {
  const { newCounter } = useSelector((state: any) => state);
  console.log("counter", newCounter);
  // const showCounter = useSelector(
  //   (state: CounterState) => state.showCounterField
  // );
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(counterActions.increment());
  };

  const handleDecrement = () => {
    dispatch(counterActions.decrement());
  };

  const handleIncreaseByValue = () => {
    dispatch(counterActions.increase(5));
  };

  const handleToggleCounter = () => {
    dispatch(counterActions.toggleCounter());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {newCounter.showCounterField && (
        <div className={classes.value}>{newCounter.counter}</div>
      )}

      <div>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
        <button onClick={handleIncreaseByValue}>IncreaseByFive</button>
      </div>
      <button onClick={handleToggleCounter}>Toggle Counter</button>
    </main>
  );
};
