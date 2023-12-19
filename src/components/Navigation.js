import React from "react";
import "./Navigation.css";
import { Link } from "react-router-dom";

function Navigation() {
    return(
        <nav>
            <ul>
                <li><Link to="/">About</Link></li>
                <li><Link to="/portfolio">Portfolio</Link></li>
            </ul>
        </nav>
    );
}

export default Navigation;