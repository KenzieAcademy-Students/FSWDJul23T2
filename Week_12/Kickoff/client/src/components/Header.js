import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Header = () => {
  const { auth, signout } = useAuth();

  const navigate = useNavigate();

  return (
    <Navbar expand="md" variant="dark" bg="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">
          Week 12 Kickoff
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="top-nav" />
        <Navbar.Collapse id="top-nav">
          {auth.isAuthorized && (
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/dashboard">
                Dashboard
              </Nav.Link>
            </Nav>
          )}
          <Nav className="ms-auto">
            {auth.isAuthorized ? (
              <Nav.Link as={Button} variant="info" size="sm" onClick={signout}>
                Sign Out
              </Nav.Link>
            ) : (
              <>
                <Nav.Link
                  as={Button}
                  type="button"
                  variant="primary"
                  onClick={() => navigate("/login")}
                  size="sm"
                >
                  Sign In
                </Nav.Link>
                <Nav.Link
                  as={Button}
                  type="button"
                  variant="secondary"
                  onClick={() => navigate("/register")}
                  size="sm"
                >
                  Sign Up
                </Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
