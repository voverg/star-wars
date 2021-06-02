export default class SwapiService {
  _apiBase = 'https://swapi.dev/api';
  _imageBase = 'https://starwars-visualguide.com/assets/img';

  getResourse = async (url) => {
    const response = await fetch(`${this._apiBase}${url}`);
    if (!response.ok) {
      throw new Error(`Could not fetch ${url}, received ${response.status}`)
    }
    const body = await response.json();

    return body;
  }

  getAllPeople = async () => {
    const res = await this.getResourse(`/people/`);
    return res.results.map(this._transformPerson);
  }

  getPerson = async (id) => {
    const person = await this.getResourse(`/people/${id}`);
    return this._transformPerson(person);
  }

  getPersonImage = ({id}) => {
    return `${this._imageBase}/characters/${id}.jpg`;
  }

  getAllPlanets = async () => {
    const res = await this.getResourse(`/planets/`);
    return res.results.map(this._transformPlanet);
  }

  getPlanet = async (id) => {
    const planet = await this.getResourse(`/planets/${id}`);
    return this._transformPlanet(planet);
  }

  getPlanetImage = ({id}) => {
    return `${this._imageBase}/planets/${id}.jpg`;
  }

  getAllStarships = async () => {
    const res = await this.getResourse(`/starship/`);
    return res.results.map(this._transformStarship);
  }

  getStarship = async (id) => {
    const starship = await this.getResourse(`/starships/${id}`);
    return this._transformStarship(starship);
  }

  getStarshipImage = ({id}) => {
    return `${this._imageBase}/starships/${id}.jpg`;
  }

  _extractId(item) {
    const idRegExp = /\/(\d+)\/$/;
    return item.url.match(idRegExp)[1];
  }

  _transformPerson = (person) => {
    return {
      id: this._extractId(person),
      name: person.name,
      gender: person.gender,
      birthYear: person.birth_year,
      eyeColor: person.eye_color
    };
  };

  _transformPlanet = (planet) => {
    return {
      id: this._extractId(planet),
      name: planet.name,
      population: planet.population,
      rotationPeriod: planet.rotation_period,
      diameter: planet.diameter,
      climate: planet.climate
    };
  };

  _transformStarship = (starship) => {
    return {
      id: this._extractId(starship),
      name: starship.name,
      model: starship.model,
      length: starship.length,
      starshipClass: starship.starship_class
    }
  };

}
