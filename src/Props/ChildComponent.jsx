import React from "react";

/* Example parent Component to Child Component Props passing */

/* Normal Function
 */
// function ChildComponent(props) {
//   return <h1>{props.text}</h1>;
// }

const ChildComponent = (props) => {
  return <h1>{props.message}</h1>;
};

export default ChildComponent;
