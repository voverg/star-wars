import React from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import PeoplePage from '../people-page';
import ErrorBoundry from '../error-boundry/';

import Row from '../row/';
import ItemList from '../item-list/';
import ItemDetails, {Record} from '../item-details/';
import SwapiService from '../../services/swapi-service.js';

import './app.css';

export default class App extends React.Component {
  swapiService = new SwapiService;
  state = {};

  render() {
    const {getPerson, getStarship, getPersonImage, getStarshipImage} = this.swapiService;

    const personDetails = (
      <ItemDetails
        itemId={11}
        getData={getPerson}
        getImageUrl={getPersonImage}>

          <Record field="gender" label="Gender" />
          <Record field="birthYear" label="Birth Year" />
          <Record field="eyeColor" label="Eye color" />

        </ItemDetails>
    );

    const starshipDetails = (
      <ItemDetails
        itemId={9}
        getData={getStarship}
        getImageUrl={getStarshipImage}>

          <Record field="model" label="Model" />
          <Record field="length" label="Length" />
          <Record field="starshipClass" label="Starship class" />

        </ItemDetails>
    );

    return (
      <ErrorBoundry>
        <div className="app">
          <Header />
          <Row left={personDetails} right={starshipDetails} />
        </div>
      </ErrorBoundry>
    );
  }

  // render() {
  //   return (
  //     <ErrorBoundry>
  //       <div className="app">
  //         <Header />
  //         <RandomPlanet />
  //         <PeoplePage />
  //       </div>
  //     </ErrorBoundry>
  //   );
  // }

}
