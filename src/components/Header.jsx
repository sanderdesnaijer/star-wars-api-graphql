import React, { Component } from "react";
import { NavLink } from "react-router-dom";

const nav = [
  { url: "/", name: "films" },
  { url: "/planets", name: "planets" },
  { url: "/species", name: "species" },
  { url: "/starships", name: "starships" }
];

class Header extends Component {
  render() {
    return (
      <header className="header">
        <h1 className="page-title">Star Wars API React & GraphQl</h1>
        <nav className="navigation">
          <ul className="menu">
            {nav.map(nav => (
              <li class="menu__item">
                <NavLink
                  exact={true}
                  className="nav-link"
                  activeClassName="active"
                  to={nav.url}
                >
                  {nav.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
