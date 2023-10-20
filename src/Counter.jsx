import React, { useEffect, useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);

  //   useEffect(() => {
  //     setCounter((prev) => prev + 1);
  //   }, [counter]);

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
        decrease
      </button>
      <div>{counter}</div>
      <button
        onClick={() => setCounter((prev) => prev + 1)}
        className="btn btn-success
      "
      >
        increase
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
