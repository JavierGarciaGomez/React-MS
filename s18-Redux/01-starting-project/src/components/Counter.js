// ..., 234
import { useDispatch, useSelector } from "react-redux";
import types from "../types/types";
import classes from "./Counter.module.css";

const Counter = () => {
  // 234
  const counter = useSelector((state) => state.counter);
  const showCounter = useSelector((state) => state.showCounter);
  const dispatch = useDispatch();

  const incrementHandler = (value) => {
    dispatch({ type: types.increment, payload: value });
  };

  const decrementHandler = () => {
    dispatch({ type: types.decrement });
  };

  const toggleCounterHandler = () => {
    console.log("hiding");

    dispatch({ type: types.toggle });
  };

  console.log("show counter", showCounter);

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={() => incrementHandler(1)}>Increment</button>
        <button onClick={() => incrementHandler(5)}>Increase by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
