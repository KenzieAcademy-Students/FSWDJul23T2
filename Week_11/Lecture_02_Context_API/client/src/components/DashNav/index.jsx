import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import useAdvanced from "../../hooks/useAdvanced";
import { Navigate } from "react-router-dom";

function DashNav() {
  const { user, theme, toggleTheme } = useAdvanced();

  if (!user) return <Navigate to="/signin" />;

  return (
    <Navbar variant={theme} bg={theme}>
      <Container>
        <Navbar.Collapse>
          <Nav className="me-auto">
            <Nav.Link>Welcome, {user.username}</Nav.Link>
            <Nav.Link onClick={toggleTheme}>
              Set Theme {theme === "light" ? "Dark" : "Light"}
            </Nav.Link>
          </Nav>
          <Nav className="ms-auto">
            <Nav.Link>Placeholder</Nav.Link>
            <Nav.Link>Placeholder</Nav.Link>
            <Nav.Link>Placeholder</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default DashNav;
