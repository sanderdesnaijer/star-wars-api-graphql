import React, { Component } from "react";
import { Query } from "react-apollo";
import { Link } from "react-router";
import gql from "graphql-tag";
import getPlanetsGql from "../graphql/getPlanets.gql";

import { getIdfromUrl } from "../helpers";
import Spinner from "./Spinner";
import PlanetIcon from "./PlanetIcon";

class Planets extends Component {
  render() {
    const planetId = this.props.match.params.id;
    return (
      <Query query={gql(getPlanetsGql)}>
        {({ loading, error, data }) => {
          if (loading) return <Spinner />;
          if (error) return `Error!: ${error}`;
          const { name, climate } = data;
          return (
            <div className="planet container">
              <div className="col-left">
                <h1>Planets</h1>
              </div>
              <div className="col-right">
                <ul className="planet-list planet-list--overview">
                  {data.planets.edges.map(planet => (
                    <PlanetIcon
                      planetId={getIdfromUrl(planet.url)}
                      name={planet.name}
                      climate={planet.climate}
                    />
                  ))}
                </ul>
              </div>
            </div>
          );
        }}
      </Query>
    );
  }
}

export default Planets;
