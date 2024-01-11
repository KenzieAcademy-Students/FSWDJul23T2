import React, { useEffect } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import useTheme from "../hooks/useTheme";

const UserPreferences = () => {
  const { theme, fontSize, toggleTheme } = useTheme();

  return (
    <Container>
      <h1>Preferences</h1>
      <Row as="section">
        <Col as="h3" xs={12}>
          Theme Color
        </Col>
        <Col xs={12}>
          <Form.Group className="d-flex gap-2 align-items-center">
            <Form.Label as="span">Light</Form.Label>
            <Form.Switch checked={theme === "dark"} onChange={toggleTheme} />
            <Form.Label as="span">Dark</Form.Label>
          </Form.Group>
        </Col>
      </Row>
    </Container>
  );
};

export default UserPreferences;
