import * as React from "react";
import ApolloClient, { gql } from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { HashRouter as Router } from "react-router-dom";
require("../styles/main.scss");

import Main from "./Main";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql"
});

class App extends React.Component {
  render() {
    return (
      <Router>
        <ApolloProvider client={client}>
          <Main />
        </ApolloProvider>
      </Router>
    );
  }
}

export default App;
