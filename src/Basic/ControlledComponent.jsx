import React from "react";
import { useState } from "react";

function ControlledInput() {
  const [inputValue, SetInputValue] = useState("");

  const handleChange = (event) => {
    SetInputValue(event.target.value);
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={handleChange} />
      <h1>Entered Value : {inputValue}</h1>
    </div>
  );
}

export default ControlledInput;
