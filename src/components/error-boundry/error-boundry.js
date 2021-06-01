import React from 'react';

import ErrorIndicator from '../error-indicator/';
import './error-boundry.css';

export default class ErrorBoundry extends React.Component {
  state = {
    hasError: false
  }

  componentDidCatch(error, info) {
    this.setState({hasError: true});
  }

  render() {
    if (this.state.hasError) {
      return <ErrorIndicator />;
    }

    return this.props.children;
  }
}
