import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import useAdvanced from "../../hooks/useAdvanced";

const initialState = {
  username: "",
  password: "",
};

const options = ["/bird.svg", "/dog.svg", "/fox.svg", "/frog.svg"];

const selectRandomProfileImage = () => {
  const index = Math.floor(Math.random() * options.length);
  return options[index];
};

function LoginPage() {
  const [data, setData] = useState(initialState);
  const { signinUser } = useAdvanced();
  const navigate = useNavigate();

  const handleInputChange = (e) =>
    setData((cur) => ({ ...cur, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();

    /**
     * Pretend we do stuff
     */

    signinUser(data.username, selectRandomProfileImage());
    navigate("/dashboard");
  };

  return (
    <Container>
      <h1>Sign In</h1>
      <Row>
        <Col
          as={Form}
          onSubmit={handleSubmit}
          xs={12}
          md={{ span: 8, offset: 2 }}
          lg={{ span: 4, offset: 4 }}
        >
          <Form.Group className="mb-2">
            <Form.Label htmlFor="username">Username:</Form.Label>
            <Form.Control
              type="text"
              id="username"
              autoComplete="off"
              name="username"
              value={data.username}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Label htmlFor="password">Password:</Form.Label>
            <Form.Control
              type="password"
              id="password"
              autoComplete="off"
              name="password"
              value={data.password}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Col as={Button} xs={12} type="submit" variant="primary">
              Sign In
            </Col>
          </Form.Group>
          <Form.Group className="text-center">
            <Form.Text>
              Don't have an account? <Link to="/signup">Create an Account</Link>
            </Form.Text>
          </Form.Group>
        </Col>
      </Row>
    </Container>
  );
}

export default LoginPage;
