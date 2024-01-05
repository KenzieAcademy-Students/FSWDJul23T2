import { useContext } from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import authContext from "../contexts/authContext";

const Header = () => {
  const { user, logoutUser } = useContext(authContext);

  return (
    <Navbar expand="md" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">
          {user ? `Welcome, ${user.name}!` : "Week 11 Kickoff"}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="top-nav" />
        <Navbar.Collapse id="top-nav">
          <Nav>
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            {user ? (
              <Nav.Link as={Button} onClick={logoutUser}>
                Sign Out
              </Nav.Link>
            ) : (
              <Nav.Link as={Link} to="/signup">
                Sign Up
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
