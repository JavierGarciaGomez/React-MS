// ..., 234
import { useDispatch, useSelector } from "react-redux";
import { counterActions } from "../store/counterSlice";
import types from "../types/types";
import classes from "./Counter.module.css";

const Counter = () => {
  // 234
  const counter = useSelector((state) => state.counter.counter);

  const showCounter = useSelector((state) => state.counter.showCounter);
  const dispatch = useDispatch();

  const incrementHandler = (value) => {
    dispatch(counterActions.increment(value));
  };

  const decrementHandler = () => {
    // dispatch({ type: types.decrement });
    console.log("here");
    dispatch(counterActions.decrease());
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle());
  };

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
