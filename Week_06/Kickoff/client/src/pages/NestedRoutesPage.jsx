import React from "react";
import { Button, ButtonGroup, Container, Row } from "react-bootstrap";
import { Outlet, useNavigate } from "react-router-dom";

const NestedRoutesPage = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <h1>Nested Routes</h1>
      <ButtonGroup aria-label="Nested routes">
        <Button variant="secondary" onClick={() => navigate("/nested-routes")}>
          Intro
        </Button>
        <Button
          variant="secondary"
          onClick={() => navigate("/nested-routes/uses")}
        >
          Uses
        </Button>
        <Button
          variant="secondary"
          onClick={() => navigate("/nested-routes/random")}
        >
          Random
        </Button>
      </ButtonGroup>
      <Row>
        {/* This Outlet is what allows the nested route to appear */}
        <p>v Outlet v</p>
        <Outlet />
        <p>^ Outlet ^</p>
      </Row>
    </Container>
  );
};

export default NestedRoutesPage;
