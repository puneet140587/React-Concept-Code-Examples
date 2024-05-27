import React, { useEffect, useState } from 'react';
import withLoadingSpinner from './withLoadingSpinner';
import DataComponent from './DataComponent';

// Wrap DataComponent with withLoadingSpinner HOC
const DataComponentWithLoading = withLoadingSpinner(DataComponent, (props) => !props.data);

const LoadingSpinner = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Simulate data fetching with a timeout
    const fetchData = () => {
      setTimeout(() => {
        setData({ name: 'John Doe', age: 30 });
      }, 2000);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>My App</h1>
      <DataComponentWithLoading data={data} />
    </div>
  );
};

export default LoadingSpinner;
