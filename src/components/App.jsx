import * as React from "react";
import ApolloClient, { gql } from "apollo-boost";
import { ApolloProvider } from "react-apollo";
require("../styles/main.scss");

import Main from "./Main";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql"
});

class App extends React.Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Main />
      </ApolloProvider>
    );
  }
}

export default App;
