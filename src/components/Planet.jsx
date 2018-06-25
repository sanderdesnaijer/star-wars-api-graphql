import React, { Component } from "react";
import { Query } from "react-apollo";
import { Link } from "react-router";
import gql from "graphql-tag";
import getPlanetGql from "../graphql/getPlanet.gql";

import { getIdfromUrl } from "../helpers";
import Spinner from "./Spinner";

class Planet extends Component {
  render() {
    const planetId = this.props.match.params.id;
    return (
      <Query query={gql(getPlanetGql)} variables={{ planetId }}>
        {({ loading, error, data }) => {
          if (loading) return <Spinner />;
          if (error) return `Error!: ${error}`;
          const { planet } = data;

          return (
            <div className="planet container">
              <div className="col-left">
                <h1>{planet.name}</h1>
                <div
                  className={`planet_icon planet_icon--big ${planet.climate}`}
                />
              </div>
              <div className="col-right">
                <ol>
                  <li>
                    <span>
                      <strong>Gravity: </strong>
                      {planet.gravity}
                    </span>
                  </li>
                  <li>
                    <span>
                      <strong>Orbital period: </strong>
                      {planet.orbital_period}
                    </span>
                  </li>
                  <li>
                    <span>
                      <strong>Rotation period: </strong>
                      {planet.rotation_period}
                    </span>
                  </li>
                  <li>
                    <span>
                      <strong>Surface water: </strong>
                      {planet.surface_water}
                    </span>
                  </li>
                  <li>
                    <span>
                      <strong>Terrain: </strong>
                      {planet.terrain}
                    </span>
                  </li>
                </ol>
              </div>
            </div>
          );
        }}
      </Query>
    );
  }
}

export default Planet;
