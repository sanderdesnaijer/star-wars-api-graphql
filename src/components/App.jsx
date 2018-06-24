import * as React from "react";
import ApolloClient, { gql } from "apollo-boost";
import { ApolloProvider } from "react-apollo";
require("../styles/main.scss");

import Main from "./Main";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql"
});

// client
//   .query({
//     query: gql(getFilmsGql)
//   })
//   .then(res => console.log(res.data.films.edges));

class App extends React.Component {
  componentDidMount() {}
  render() {
    return (
      <ApolloProvider client={client}>
        <Main />
      </ApolloProvider>
    );
  }
}

export default App;
