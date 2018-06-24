import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Header from "./Header";
import Films from "./Films";
import Starships from "./Starships";

class Main extends Component {
  render() {
    return (
      <div className="main">
        <Header />
        <Route exact path="/" component={Films} />
        <Route exact path="/starships" component={Starships} />
      </div>
    );
  }
}

export default Main;
