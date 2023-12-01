import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Navbar expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">
          Sports Network
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/all">
              All Leagues
            </Nav.Link>
            <NavDropdown title="Leagues">
              <NavDropdown.Item as={Link} to="/mlb">
                MLB
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/nfl">
                NFL
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/nhl">
                NHL
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
