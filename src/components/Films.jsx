import React, { Component } from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import getFilmsGql from "../graphql/getFilms.gql";
import Spinner from "./Spinner";
import PlanetListItem from "./PlanetListItem";
import { getYear } from "../helpers";

class Films extends Component {
  render() {
    return (
      <Query query={gql(getFilmsGql)}>
        {({ loading, error, data }) => {
          if (loading) return <Spinner />;
          if (error) return <p>Error :(</p>;

          return data.films.edges.map(
            ({ title, director, url, release_date, planets }) => (
              <div className="film container" key={url}>
                <div className="col-left">
                  <h2>{title}</h2>
                  <span>{`${getYear(release_date)}, ${director}`}</span>
                </div>
                <div className="col-right">
                  <ul className="planet-list">
                    {planets.map(planet => (
                      <PlanetListItem key={planet} planet={planet} />
                    ))}
                  </ul>
                </div>
              </div>
            )
          );
        }}
      </Query>
    );
  }
}

export default Films;
