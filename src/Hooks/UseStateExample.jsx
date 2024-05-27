import React from "react";
import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Counter Count : {count} </h1>
      <button
        style={{ backgroundColor: "skyblue", margin: 5 }}
        onClick={incrementCount}
      >
        Increment
      </button>
      <button
        style={{ backgroundColor: "yellow", margin: 5 }}
        onClick={decrementCount}
      >
        Decrement
      </button>
    </div>
  );
};

export default Counter;
