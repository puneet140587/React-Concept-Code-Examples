import React from "react";
import { useRef } from "react";

const UncontrolledInput = () => {
  const inputRef = useRef();

  const handleClick = () => {
    alert(`Entered Input : ${inputRef.current.value}`);
  };

  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={handleClick}>Click Here</button>
    </div>
  );
};

export default UncontrolledInput;
