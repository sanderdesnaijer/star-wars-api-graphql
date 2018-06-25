import React, { Component } from "react";
import { Query } from "react-apollo";
import { Link } from "react-router";
import gql from "graphql-tag";
import getPlanetGql from "../graphql/getPlanet.gql";

import { getIdfromUrl } from "../helpers";

class Planet extends Component {
  render() {
    console.log("ee");
    return (
      <Query query={gql(getPlanetGql)} variables={{}}>
        {({ loading, error, data }) => {
          if (loading) return "loading";
          if (error) return `Error!: ${error}`;

          return "planet";
        }}
      </Query>
    );
  }
}

export default Planet;
