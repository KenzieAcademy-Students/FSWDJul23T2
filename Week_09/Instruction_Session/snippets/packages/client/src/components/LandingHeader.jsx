import React from "react";
import { Container, Button, Nav } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";

const LandingHeader = ({ login }) => {
  let navigate = useNavigate();

  return (
    <Container
      fluid
      className="text-info"
      style={{
        backgroundImage: "url('/hero-bg-blue.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "50% 20%",
        height: "350px",
        padding: "4rem 2rem",
      }}
    >
      <Container className="hero-text position-relative">
        <Row>
          <Col xs={12} lg={8} style={{ height: "100%" }}>
            <Row>
              <img
                src="/logo.png"
                alt="logo"
                width="300px"
                onClick={() => {
                  navigate("/");
                }}
                style={{
                  cursor: "pointer",
                  width: "300px",
                }}
              />
            </Row>
            <Row>
              <p className="mt-2 lead" style={{ color: "white" }}>
                A place to engage with the Kenzie fam
              </p>
            </Row>
          </Col>
          {login && (
            <Col xs={12} lg={4} className="pt-4 d-flex">
              <Nav.Link
                as={Link}
                to="/login"
                className="float-lg-right float-xs-none mx-3"
              >
                <Button variant="outline-primary">Login</Button>
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/register"
                className="float-lg-right float-xs-none mx-3"
              >
                <Button variant="primary">Register</Button>
              </Nav.Link>
            </Col>
          )}
        </Row>
      </Container>
    </Container>
  );
};

export default LandingHeader;
