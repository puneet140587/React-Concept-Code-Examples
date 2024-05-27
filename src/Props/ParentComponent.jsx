import React from "react";

/* Example Parent Component to Child Component Props passing */

import ChildComponent from "./ChildComponent";

/* Normal function */

// function ParentComponent() {
//   const message = "Hello from Parent text wale";

//   return <ChildComponent text={message} />;
// }

/* Arrow Function */

const ParentComponent = () => {
  const message = "Hello from Parent! message wale";
  return (
    <div>
      <ChildComponent message={message} />
    </div>
  );
};

export default ParentComponent;
