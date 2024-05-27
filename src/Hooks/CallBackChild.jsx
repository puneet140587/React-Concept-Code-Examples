import { React, memo } from "react";

function CallBackChild({ test }) {
  console.log("Callback Child Component");
  return <div></div>;
}

export default memo(CallBackChild);
