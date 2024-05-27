/* Implement event delegation in a React component by attaching a click event listener to a 
parent element and handling the events for multiple child elements. For example, 
create a list of items, and when an item is clicked, log its text to the console.
 */

import React from "react";

function EventDelegation() {
  const handleClick = (event) => {
    /* if (event.target.tagName === "LI") {
      console.log(event.target.textContent);
    } */

    console.log(event.target.textContent);
  };

  return (
    <div>
      <h1>Event Delegation</h1>
      <ul onClick={handleClick}>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
        <li>Item 4</li>
      </ul>
    </div>
  );
}

export default EventDelegation;
