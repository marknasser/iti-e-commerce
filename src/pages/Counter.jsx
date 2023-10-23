import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "../store/counterSlice.js";

function Counter() {
  const counterState = useSelector((state) => state.counter.value);
  const dispatsh = useDispatch();

  return (
    <div
      style={CounterMain()}
      className="d-flex align-items-center gap-5
    "
    >
      <button
        onClick={() => dispatsh(counterActions.decrement())}
        className="btn btn-danger
      "
      >
        Decrease
      </button>
      <div>{counterState}</div>
      <button
        onClick={() => dispatsh(counterActions.increment())}
        className="btn btn-success
      "
      >
        Increase
      </button>
    </div>
  );
}

export default Counter;

function CounterMain() {
  return {
    color: "blue",
    lineHeight: 10,
    padding: 20,
  };
}
