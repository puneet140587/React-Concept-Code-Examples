/* Create a Higher-Order Component that adds a loading spinner to a component until a specified condition is met. For instance, create an HOC that displays a loading spinner until data is fetched and displayed in a component. */

import React from 'react';

// HOC to add a loading spinner until a specified condition is met
const withLoadingSpinner = (WrappedComponent, condition) => {
  return class extends React.Component {
    render() {
      // Check the condition to display loading spinner or wrapped component
      if (condition(this.props)) {
        return <div>Loading...</div>; // Loading spinner
      }
      return <WrappedComponent {...this.props} />;
    }
  };
};

export default withLoadingSpinner;
