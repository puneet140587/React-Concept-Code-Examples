import React from "react";
import { useEffect } from "react";
import { useState } from "react";

function DataFetcher() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then((response) => response.json())
      //   .then((json) => console.log(json));
      .then((data) => setData(data));
  }, []);

  return (
    <div style={{ backgroundColor: "skyblue" }}>
      {data.map((item) => (
        <h3 key={item.id}>
          {item.email}
          <br />
          {item.website}
        </h3>
      ))}
    </div>
  );
}

export default DataFetcher;

// function DataFetcher() {
//     const [data, setData] = useState([]);

//     useEffect(() => {
//       fetch('https://jsonplaceholder.typicode.com/users')
//         .then((response) => response.json())
//         .then((data) => setData(data));
//     }, []); // Empty dependency array ensures the effect runs only once

// return (
//   <div>
//     {data.map((item) => (
//       <p key={item.id}>{item.name}</p>
//     ))}
//   </div>
// );
//   }

//   export default DataFetcher;
