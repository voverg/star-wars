const url = 'https://swapi.dev/api/people/1/';

class swapiService {
  async getResourse(url) {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Could not fetch ${url}, received ${response.status}`)
    }
    const body = await response.json();

    return body;
  }

}
