import React, { Component } from "react";

const PlanetIcon = ({ name, climate, planetId }) => (
  <li className="planet-list__item">
    <a href={`/#/planets/${planetId}`}>
      <div className={`planet_icon ${climate ? climate : ""}`} />
      <span>{name ? name : ""}</span>
    </a>
  </li>
);

export default PlanetIcon;
