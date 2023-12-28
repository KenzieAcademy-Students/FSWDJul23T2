import React from "react";
import { Navbar, Nav, Button, Figure, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useProvideAuth } from "../hooks/useAuth";

export default function Header() {
  const {
    state: { user },
    signout,
  } = useProvideAuth();

  if (!user) {
    return null;
  }
  return (
    <Navbar bg="header" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/" style={{ marginLeft: "50px" }}>
          <img src="/logo.png" alt="logo" width="180px" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          {user && (
            <Nav className="d-flex align-items-center">
              <Nav.Item
                as={Link}
                to={`/u/${user.username}`}
                className="d-flex align-items-center"
              >
                <Figure
                  className="bg-border-color rounded-circle overflow-hidden my-auto ml-2 p-1"
                  style={{
                    height: "35px",
                    width: "35px",
                    background: "white",
                  }}
                >
                  <Figure.Image
                    src={user.profile_image}
                    className="w-100 h-100"
                  />
                </Figure>
              </Nav.Item>
              <Nav.Item
                as={Button}
                variant="outline-info"
                onClick={() => signout()}
                style={{
                  border: "none",
                  marginRight: "50px",
                  color: "#E5E1DF",
                }}
              >
                Sign Out
              </Nav.Item>
            </Nav>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
