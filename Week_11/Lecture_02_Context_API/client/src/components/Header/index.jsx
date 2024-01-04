import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAdvanced from "../../hooks/useAdvanced";

function Header() {
  const { user, theme, signoutUser } = useAdvanced();
  return (
    <Navbar bg={theme} variant={theme} collapseOnSelect>
      <Container>
        <Navbar.Brand as={Link} to="/">
          Just a Little Context
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="top-nav" />
        <Navbar.Collapse>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            {user && (
              <Nav.Link as={Link} to="/dashboard">
                Dashboard
              </Nav.Link>
            )}
          </Nav>
          <Nav className="ms-auto">
            {user ? (
              <Nav.Link onClick={signoutUser}>Sign Out</Nav.Link>
            ) : (
              <>
                <Nav.Link as={Link} to="/signup">
                  Sign Up
                </Nav.Link>
                <Nav.Link as={Link} to="/signin">
                  Sign In
                </Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
