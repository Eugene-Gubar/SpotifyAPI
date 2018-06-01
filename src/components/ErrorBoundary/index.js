
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './index.css';

class ErrorBoundary extends Component {

  static propTypes = {
    children: PropTypes.object
  };

  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, info) {
    // Display fallback UI
    this.setState({ hasError: true });
    // You can also log the error to an error reporting service
    // logErrorToMyService(error, info);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong. Please see your console</h1>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;