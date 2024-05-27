import React, { createContext } from "react";
import Child_A from "./Child_A";

const data = createContext();

function ContextParent() {
  const name = "Puneet Shrivastava";

  return (
    <>
      {/*  <data.Provider value={name}> */}
      <data.Provider value={{ name: "Puneet", gender: "Male" }}>
        <Child_A />
      </data.Provider>
    </>
  );
}

export default ContextParent;

export { data };
