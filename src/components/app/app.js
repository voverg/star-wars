import React from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ItemList from '../item-list';
import PersonDetails from '../person-details';

import './app.css';

export default class App extends React.Component {
  state = {
    selectedPerson: 1
  }

  onPersonSelect = (id) => {
    this.setState({
      selectedPerson: id
    });
  };

  render() {
    return (
      <div className="my-main">
        <Header />
        <RandomPlanet />

        <div className="description">
          <div className="my-col">
            <ItemList onItemSelect={this.onPersonSelect} />
          </div>
          <div className="my-col">
            <PersonDetails personId={this.state.selectedPerson} />
          </div>
        </div>
      </div>
    );
  }

}
