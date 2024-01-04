import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { ProfileImageSelector } from "../../components";
import useAdvanced from "../../hooks/useAdvanced";

const options = ["/bird.svg", "/dog.svg", "/fox.svg", "/frog.svg"];

const selectRandomProfileImage = () => {
  const index = Math.floor(Math.random() * options.length);
  return options[index];
};

const initialState = {
  username: "",
  email: "",
  password: "",
  confirm_password: "",
  profile_image: selectRandomProfileImage(),
};

function RegisterPage() {
  const [data, setData] = useState(initialState);
  const { signinUser, incrementCount } = useAdvanced();

  const navigate = useNavigate();

  const handleInputChange = (e) =>
    setData((cur) => ({ ...cur, [e.target.name]: e.target.value }));

  const handleProfileImageChange = (path) =>
    setData({ ...data, profile_image: path });

  const handleSubmit = (e) => {
    e.preventDefault();

    /**
     * Pretend we're validating here
     */
    signinUser(data.username, data.profile_image);
    navigate("/dashboard");
  };

  return (
    <Container>
      <h1>Create an Account</h1>
      <Row>
        <Col
          as={Form}
          xs={12}
          md={{ span: 8, offset: 2 }}
          lg={{ span: 4, offset: 4 }}
          onSubmit={handleSubmit}
        >
          <ProfileImageSelector
            options={options}
            profileImage={data.profile_image}
            handleSelectProfileImage={handleProfileImageChange}
          />
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
          <Form.Group className="mb-2">
            <Form.Label htmlFor="email">Email:</Form.Label>
            <Form.Control
              type="text"
              id="email"
              autoComplete="off"
              name="email"
              value={data.email}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group className="mb-2">
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
          <Form.Group className="mb-4">
            <Form.Label htmlFor="confirm_password">
              Confirm Password:
            </Form.Label>
            <Form.Control
              type="password"
              id="confirm_password"
              autoComplete="off"
              name="confirm_password"
              value={data.confirm_password}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Col as={Button} xs={12} type="submit" variant="primary">
              Sign Up
            </Col>
          </Form.Group>
          <Form.Group className="text-center">
            <Form.Text>
              Already have an account? <Link to="/signin">Log In</Link>
            </Form.Text>
          </Form.Group>
        </Col>
      </Row>
    </Container>
  );
}

export default RegisterPage;
