import React from 'react';

import SwapiService from '../../services/swapi-service.js';
import ItemList from '../item-list/';
import ItemDetails from '../item-details/';
import ErrorBoundry from '../error-boundry/';
import Row from '../row/';

import './people-page.css';


export default class PeoplePage extends React.Component {
  swapiService = new SwapiService();

  state = {
    selectedPerson: 1
  }

  onPersonSelect = (id) => {
    this.setState({
      selectedPerson: id
    });
  };

  render() {
    const itemList = (
      <ErrorBoundry>
        <ItemList
          onItemSelect={this.onPersonSelect}
          getData={this.swapiService.getAllPeople}
        >

            {(item) => `${item.name} (${item.birthYear})`}

        </ItemList>
      </ErrorBoundry>
    );

    const itemDetails = (
      <ErrorBoundry>
        <ItemDetails itemId={this.state.selectedPerson} />
      </ErrorBoundry>
    );

    return (
      <Row left={itemList} right={itemDetails} />
    );
  }

}
