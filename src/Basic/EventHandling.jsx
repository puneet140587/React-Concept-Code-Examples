import React from "react";

function EventHandling() {
  const handleClick = () => {
    alert("button clicked");
  };

  return <button onClick={handleClick}>Click Me</button>;
}

export default EventHandling;
