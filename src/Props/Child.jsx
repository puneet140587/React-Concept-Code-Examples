import react from "react";

// Child to Parent component data passing example

const Child = ({ onData }) => {
  const sendDataToParent = () => {
    const data = "Hello from the child!";
    onData(data);
  };

  return (
    <button onClick={sendDataToParent}>Send Data to Parent Component</button>
  );
};

export default Child;
