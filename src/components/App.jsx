import * as React from "react";
import ApolloClient, { gql } from "apollo-boost";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql"
});

client
  .query({
    query: gql`
      query getSpecies {
        species {
          name
          average_height
          classification
        }
      }
    `
  })
  .then(res => console.log(res));

class App extends React.Component {
  state = {
    planets: []
  };

  componentDidMount() {
    fetch("https://swapi.co/api/planets/")
      .then(data => data.json())
      .then(result =>
        this.setState({
          planets: result.results
        })
      );
  }

  onClickPlanet = planet => {
    const films = Promise.all(
      planet.films.map(film => fetch(film).then(data => data.json()))
    ).then(result => console.log(result));
  };

  render() {
    const { planets } = this.state;
    return (
      <div className="gerrit">
        {planets ? (
          <ul>
            {planets.map(planet => (
              <li onClick={() => this.onClickPlanet(planet)}>{planet.name}</li>
            ))}
          </ul>
        ) : null}
      </div>
    );
  }
}

export default App;
