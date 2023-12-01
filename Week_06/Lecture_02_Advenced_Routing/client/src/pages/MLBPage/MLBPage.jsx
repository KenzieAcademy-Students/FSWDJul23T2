import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";

function MLBPage() {
  return (
    <>
      <Navbar>
        <Container>
          <Navbar.Brand as={Link} to="/mlb">
            MLB
          </Navbar.Brand>
          <Nav>
            <Nav.Link as={Link} to="/mlb/scores">
              Scores
            </Nav.Link>
            <Nav.Link as={Link} to="/mlb/standings">
              Standings
            </Nav.Link>
            <Nav.Link as={Link} to="/mlb/teams">
              Teams
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Outlet />
    </>
  );
}

export default MLBPage;
