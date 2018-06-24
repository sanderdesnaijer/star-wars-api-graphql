import React, { Component } from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import getFilmsGql from "../graphql/getFilms.gql";

class Films extends Component {
  render() {
    return (
      <Query query={gql(getFilmsGql)}>
        {({ loading, error, data }) => {
          if (loading) return <p>Loading...</p>;
          if (error) return <p>Error :(</p>;

          return data.films.edges.map(
            ({ title, opening_crawl, url, release_date }) => (
              <div key={url}>
                <p>{title}</p>
                <p>{opening_crawl}</p>
                <p>{release_date}</p>
              </div>
            )
          );
        }}
      </Query>
    );
  }
}

export default Films;
