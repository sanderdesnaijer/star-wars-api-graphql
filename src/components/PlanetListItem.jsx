import React, { Component } from "react";
import { Query } from "react-apollo";
import { Link } from "react-router";
import gql from "graphql-tag";
import getPlanetItemGql from "../graphql/getPlanetItem.gql";
import PlanetIcon from "./PlanetIcon";
import { getIdfromUrl } from "../helpers";

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
