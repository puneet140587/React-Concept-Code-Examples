import React, { useState, useEffect } from 'react';

const MyComponent = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch data from an API
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        
        // Check if the request was successful (status code 200)
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        // Parse the response JSON
        const result = await response.json();
        
        // Set the data in the component state
        setData(result);
      } catch (error) {
        // Handle errors
        console.error('Error fetching data:', error.message);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures it runs only once on mount

  return (
    <div>
      <h1>Data from API:</h1>
      {data ? (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default MyComponent;
