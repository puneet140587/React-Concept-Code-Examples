import React, { useEffect, useRef } from "react";

const EventDelegationUsingHooks = () => {
  const parentRef = useRef(null);

  useEffect(() => {
    const handleClick = (event) => {
      // Check if the clicked element is a list item
      if (event.target && event.target.nodeName === "LI") {
        console.log(event.target.textContent);
      }
    };

    const parentElement = parentRef.current;
    if (parentElement) {
      parentElement.addEventListener("click", handleClick);
    }

    // Cleanup the event listener on component unmount
    return () => {
      if (parentElement) {
        parentElement.removeEventListener("click", handleClick);
      }
    };
  }, []);

  return (
    <div>
      <ul ref={parentRef}>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
        <li>Item 4</li>
        <li>Item 5</li>
      </ul>
    </div>
  );
};

export default EventDelegationUsingHooks;
