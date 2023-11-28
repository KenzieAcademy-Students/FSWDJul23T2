import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <div className="container">
        <Link to="/" className="brand">
          NotIndeed
        </Link>
        <nav className="top-nav">
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/careers" className="nav-link">
            Careers
          </Link>
          <Link to="/salaries" className="nav-link">
            Salaries
          </Link>
          <Link to="/signup" className="nav-link">
            Sign Up
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
