import React, { Component } from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import getStarshipsGql from "../graphql/getStarships.gql";

class Films extends Component {
  render() {
    console.log(this.props);
    return (
      <Query query={gql(getStarshipsGql)}>
        {({ loading, error, data }) => {
          if (loading) return <p>Loading...</p>;
          if (error) return <p>Error :(</p>;

          return data.starships.edges.map(({ title, url }) => (
            <div key={url}>
              <p>SARSHIP{title}</p>
            </div>
          ));
        }}
      </Query>
    );
  }
}

export default Films;
