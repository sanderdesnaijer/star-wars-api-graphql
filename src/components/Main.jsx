import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import Header from "./Header";
import Films from "./Films";
import Starships from "./Starships";

class Main extends Component {
  render() {
    return (
      <Route
        render={({ location }) => (
          <div className="main">
            <div className="main__inner">
              <Header />
              <div className="content">
                <TransitionGroup>
                  <CSSTransition
                    key={location.key}
                    classNames="fade"
                    timeout={300}
                  >
                    <Switch location={location}>
                      <Route exact path="/" component={Films} />
                      <Route exact path="/planets" component={Films} />
                      <Route exact path="/planets/id" component={Films} />
                      <Route exact path="/starships" component={Starships} />
                    </Switch>
                  </CSSTransition>
                </TransitionGroup>
              </div>
            </div>
          </div>
        )}
      />
    );
  }
}

export default Main;
