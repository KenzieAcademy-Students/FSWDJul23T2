import React, { useState } from "react";
import { Container, Row, Col, InputGroup, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { LandingHeader, LoadingSpinner } from "../components";
import { useProvideAuth } from "../hooks/useAuth";
import { setAuthToken } from "../utils/api.utils";

const initialState = {
  username: "",
  password: "",
  isSubmitting: false,
  errorMessage: null,
};

const LoginPage = () => {
  const [data, setData] = useState(initialState);
  const auth = useProvideAuth();

  let navigate = useNavigate();

  const handleInputChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  const handleSignin = async (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    event.preventDefault();
    event.stopPropagation();
    setData({
      ...data,
      isSubmitting: true,
      errorMessage: null,
    });
    try {
      const res = await auth.signin(data.username, data.password);
      setAuthToken(res.token);
      navigate("/");
    } catch (error) {
      setData({
        ...data,
        isSubmitting: false,
        errorMessage: error ? error.message || error.statusText : null,
      });
    }
  };

  return (
    <div style={{ overflow: "auto", height: "100vh" }}>
      <LandingHeader />
      <Container className="mb-5">
        <Row className="pt-5 justify-content-center">
          <Form
            noValidate
            validated
            style={{ width: "350px" }}
            onSubmit={handleSignin}
          >
            <h3 className="mb-3">Login</h3>
            <Form.Group controlId="username-login">
              <Form.Label>Username</Form.Label>
              <InputGroup>
                <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                <Form.Control
                  type="text"
                  name="username"
                  placeholder="Username"
                  aria-describedby="inputGroupPrepend"
                  required
                  value={data.username}
                  onChange={handleInputChange}
                />
              </InputGroup>
            </Form.Group>
            <Form.Group>
              <Form.Label htmlFor="Login">Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                required
                id="Login"
                value={data.password}
                onChange={handleInputChange}
              />
            </Form.Group>
            {data.errorMessage && (
              <span className="form-error text-warning">
                {data.errorMessage}
              </span>
            )}
            <Row className="mr-0">
              <Col>
                New User?
                <Button
                  as="a"
                  variant="link"
                  onClick={() => navigate("/register")}
                >
                  Register
                </Button>
              </Col>
              <Button type="submit" disabled={data.isSubmitting}>
                {data.isSubmitting ? <LoadingSpinner /> : "Login"}
              </Button>
            </Row>
          </Form>
        </Row>
      </Container>
    </div>
  );
};

export default LoginPage;
