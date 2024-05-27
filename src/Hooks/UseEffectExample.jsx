import React from "react";
import { useEffect, useState } from "react";

const UseEffectExample = () => {
  //const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      // Fetch Data from an API
      const resp = await fetch("https://api.github.com/users/puneet140587");
      const result = await resp.json();
      // setData(result);
      console.log("Puneet Info :", result.id);
      console.log("Puneet Info :", result.name);
      console.log("Puneet Info :", result.url);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Data receieved from Github API</h1>
     {/*  {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : <p>Loading...</p>} */}
    </div>
  );
};

export default UseEffectExample;
