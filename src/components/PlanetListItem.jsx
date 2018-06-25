import React, { Component } from "react";
import { Query } from "react-apollo";
import { Link } from "react-router";
import gql from "graphql-tag";
import getPlanetItemGql from "../graphql/getPlanetItem.gql";

import { getIdfromUrl } from "../helpers";

const PlanetIcon = ({ name, climate, planetId }) => (
  <li className="planet-list__item">
    <a href={`/#/planets/${planetId}`}>
      <div className={`planet_icon ${climate ? climate : ""}`} />
      <span>{name ? name : ""}</span>
    </a>
  </li>
);

class PlanetListItem extends Component {
  render() {
    const planetId = getIdfromUrl(this.props.planet);
    return (
      <Query query={gql(getPlanetItemGql)} variables={{ planetId }}>
        {({ loading, error, data }) => {
          if (loading) return <PlanetIcon planetId={planetId} />;
          if (error) return `Error!: ${error}`;

          const { climate, name, gravity } = data.planet;
          return (
            <PlanetIcon planetId={planetId} name={name} climate={climate} />
          );
        }}
      </Query>
    );
  }
}

export default PlanetListItem;
