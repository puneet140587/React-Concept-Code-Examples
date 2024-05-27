import React from "react";
import { useMemo } from "react";
import { useState } from "react";

function UseMemoExample() {
  const [add, setAdd] = useState(0);
  const [minus, setMinus] = useState(100);

  const multiplication = useMemo(
    function multiply() {
      console.log("**************");
      return add * 10;
    },
    [add]
  );
  return (
    <div>
      <h1>Learning useMemo Hook </h1>
      {multiplication}
      <br />
      <button onClick={() => setAdd(add + 1)}> Addition </button>
      <span>{add}</span>
      <br />
      <button onClick={() => setMinus(minus - 1)}> Substraction </button>
      <span>{minus}</span>
    </div>
  );
}

export default UseMemoExample;
