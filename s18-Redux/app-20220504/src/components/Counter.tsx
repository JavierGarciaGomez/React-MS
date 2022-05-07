import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrementCounter,
  increaseCounterByValue,
  incrementCounter,
  toggleCounter,
} from "../store/actions";
import { CounterState } from "../store/store";
import classes from "./Counter.module.css";

const Counter = () => {
  const counter = useSelector((state: CounterState) => state.counter);
  const counter2 = useSelector((state: CounterState) => state.counter);

  const showCounter = useSelector(
    (state: CounterState) => state.showCounterField
  );
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(incrementCounter());
  };

  const handleDecrement = () => {
    dispatch(decrementCounter());
  };

  const handleIncreaseByValue = () => {
    dispatch(increaseCounterByValue(5));
  };

  const handleToggleCounter = () => {
    dispatch(toggleCounter());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}

      <div>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
        <button onClick={handleIncreaseByValue}>IncreaseByFive</button>
      </div>
      <button onClick={handleToggleCounter}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
