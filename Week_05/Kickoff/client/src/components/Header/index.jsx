import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">
          Week 6
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="top-nav" />
        <Navbar.Collapse id="top-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <NavDropdown title="Modern Styling">
              <NavDropdown.Item as={Link} to="/bootstrap">
                React Bootstrap
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/css-modules">
                CSS Modules
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/nested-routes">
              Nested Routes
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
