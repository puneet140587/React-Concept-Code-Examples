import React from "react";
import { useCallback } from "react";
import { useState } from "react";
import CallBackChild from "./CallBackChild";

function UseCallBackExample() {
  const [add, setAdd] = useState(0);

  const test = useCallback(() => {
    console.log("kuch bhi");
  },[ ])

  return (
    <div>
      <CallBackChild test={test} />
      <h1>Learning use CallBack</h1>
      {add} <br />
      <button onClick={() => setAdd(add + 1)}>Addition</button>
    </div>
  );
}

export default UseCallBackExample;
