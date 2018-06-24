import React, { Component } from "react";
import { Link } from "react-router-dom";

const nav = [
  { url: "/", name: "home" },
  { url: "/planets", name: "planets" },
  { url: "/species", name: "species" },
  { url: "/starships", name: "starships" }
];

class Header extends Component {
  render() {
    return (
      <header>
        <h1>Star Wars API React & GraphQl</h1>
        <nav>{nav.map(nav => <Link to={nav.url}>{nav.name}</Link>)}</nav>
      </header>
    );
  }
}

export default Header;
