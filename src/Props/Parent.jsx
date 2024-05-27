import react from "react";

// Child to Parent component data passing example
import Child from "./Child";

const Parent = () => {
  const handleChildData = (data) => {
    console.log("Data received from child:", data);
  };

  return <Child onData={handleChildData} />;
};

export default Parent;
