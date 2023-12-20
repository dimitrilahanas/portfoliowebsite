import React from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
  return (
    <nav>
      <ul className="navLinks">
        <li className="navItem">
          <NavLink to="/" exact className="navLink">
            About
          </NavLink>
        </li>
        <li className="navItem">
          <NavLink to="/portfolio" className="navLink">
            Portfolio
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
