import React from 'react';

// Higher-Order Component that adds a loading indicator
const withLoadingIndicator = (WrappedComponent) => {
  return class extends React.Component {
    render() {
      // Display loading indicator if isLoading prop is true
      if (this.props.isLoading) {
        return <div>Loading...</div>;
      }

      // Render the wrapped component with its original props
      return <WrappedComponent {...this.props} />;
    }
  };
};

// Higher-Order Component that adds authentication check
const withAuthentication = (WrappedComponent) => {
  return class extends React.Component {
    componentDidMount() {
      // Perform authentication check here
      // For simplicity, assume isAuthenticated is a boolean value indicating authentication status
      const isAuthenticated = true;

      // Redirect to login page if not authenticated
      if (!isAuthenticated) {
        // You can use a library like react-router for navigation
        this.props.history.push('/login');
      }
    }

    render() {
      // Render the wrapped component with its original props
      return <WrappedComponent {...this.props} />;
    }
  };
};

// Component that will be wrapped with HOCs
class MyComponent extends React.Component {
  render() {
    return <div>Content of MyComponent</div>;
  }
}

// Wrap MyComponent with HOCs
const MyComponentWithLoadingIndicatorAndAuth = withLoadingIndicator(withAuthentication(MyComponent));

// Usage in a parent component
class App extends React.Component {
  render() {
    return (
      <div>
        <h1>My App</h1>
        <MyComponentWithLoadingIndicatorAndAuth isLoading={false} />
      </div>
    );
  }
}

export default App;
