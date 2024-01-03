import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Navbar variant="dark" bg="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">
          Axios
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="top-nav" />
        <Navbar.Collapse id="top-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/teams">
              All Teams
            </Nav.Link>
            <Nav.Link as={Link} to="/teams/new">
              Create Team
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
