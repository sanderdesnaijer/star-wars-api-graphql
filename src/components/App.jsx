import * as React from "react";

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
