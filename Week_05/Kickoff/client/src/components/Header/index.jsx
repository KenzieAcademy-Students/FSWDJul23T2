import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header>
      <div className="container">
        <Link className="brand" to="/">
          Week 5: Forms and Routing
        </Link>
        <nav>
          <Link className="nav-link" to="/">
            Home
          </Link>
          <Link className="nav-link" to="/about">
            About
          </Link>
          <Link className="nav-link" to="/signup">
            Sign Up
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
