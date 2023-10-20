import React, { useEffect, useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);

  return (
    <div
      style={CounterMain()}
      className="d-flex align-items-center gap-5
    "
    >
      <button
        onClick={() => setCounter((prev) => prev - 1)}
        className="btn btn-danger
      "
      >
        Decrease
      </button>
      <div>{counter}</div>
      <button
        onClick={() => setCounter((prev) => prev + 1)}
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
