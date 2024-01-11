import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import useTheme from "../hooks/useTheme";

const Header = () => {
  const { theme, fontSize } = useTheme();
  const clearData = () => {
    /**
     * Deleting from Local Storage
     *
     * Option 1: localStorage.removeItem()
     *  - removes one item by its key
     *
     * Option 2: localStorage.clear()
     *  - removes all local storage used by the app
     */
    localStorage.removeItem("lastViewedShip");
    // localStorage.clear();
  };

  return (
    <Navbar expand="md" bg={theme} variant={theme}>
      <Container>
        <Navbar.Brand
          as={Link}
          to="/"
          style={{ fontSize: `${fontSize * 1.25}rem` }}
        >
          Elite DB
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="top-nav" />
        <Navbar.Collapse id="top-nav">
          <Nav className="me-auto">
            <Nav.Link
              as={Link}
              to="/ships"
              style={{ fontSize: `${fontSize}rem` }}
            >
              Ships
            </Nav.Link>
          </Nav>
          <Nav className="ms-auto">
            <Nav.Link
              as={Link}
              to="/preferences"
              style={{ fontSize: `${fontSize}rem` }}
            >
              Preferences
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
