import React from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import PeoplePage from '../people-page';
import ErrorBoundry from '../error-boundry/';

import './app.css';

export default class App extends React.Component {
  state = {}

  render() {
    return (
      <ErrorBoundry>
        <div className="app">
          <Header />
          <RandomPlanet />
          <PeoplePage />
        </div>
      </ErrorBoundry>
    );
  }

}
