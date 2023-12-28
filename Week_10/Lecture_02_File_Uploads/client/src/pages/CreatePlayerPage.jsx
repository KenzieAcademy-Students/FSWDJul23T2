import React, { useState } from "react";
import { postNewPlayer } from "../services/players.service";
import { useNavigate } from "react-router-dom";
import { Button, Container, Form } from "react-bootstrap";
import { AvatarUploader } from "../components";

const initialState = {
  firstName: "",
  lastName: "",
  jerseyNum: "",
  position: "C",
  imageUrl: "",
};

function CreatePlayerPage() {
  const [data, setData] = useState(initialState);
  const [errors, setErrors] = useState(initialState);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    e.stopPropagation();

    const { firstName, lastName, jerseyNum, position, imageUrl } = data;

    postNewPlayer(firstName, lastName, jerseyNum, position, imageUrl)
      .then((res) => {
        setData(initialState);
        navigate("/players");
      })
      .catch((err) => setErrors(err.response.data));
  };

  const handleInputChange = (e) =>
    setData({ ...data, [e.target.name]: e.target.value });

  const handleSetAvatarPath = (path) => setData({ ...data, imageUrl: path });

  return (
    <Container>
      <h1>Create a new player</h1>
      <Form
        onSubmit={handleSubmit}
        style={{ margin: "0 auto", display: "block", width: "400px" }}
      >
        <Form.Group className="mb-2">
          <Form.Label htmlFor="firstName">First Name</Form.Label>
          <Form.Control
            type="text"
            id="firstName"
            name="firstName"
            value={data.firstName}
            onChange={handleInputChange}
          />
          <Form.Control.Feedback type="invalid">
            {errors.firstName}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-2">
          <Form.Label htmlFor="lastName">Last Name</Form.Label>
          <Form.Control
            type="text"
            id="lastName"
            name="lastName"
            value={data.lastName}
            onChange={handleInputChange}
          />
          <Form.Control.Feedback type="invalid">
            {errors.lastName}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-2">
          <Form.Label htmlFor="jerseyNum">Jersey Number</Form.Label>
          <Form.Control
            type="number"
            id="jerseyNum"
            name="jerseyNum"
            value={data.jerseyNum}
            onChange={handleInputChange}
          />
          <Form.Control.Feedback type="invalid">
            {errors.jerseyNum}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-2">
          <Form.Label htmlFor="position">Position</Form.Label>
          <Form.Select
            id="position"
            name="position"
            value={data.position}
            onChange={handleInputChange}
          >
            <option value="LW">LW</option>
            <option value="C">C</option>
            <option value="RW">RW</option>
            <option value="D">D</option>
            <option value="G">G</option>
          </Form.Select>
        </Form.Group>
        <AvatarUploader setAvatarPath={handleSetAvatarPath} />
        <Form.Group className="mb-2">
          <Button type="submit" variant="primary">
            Submit
          </Button>
        </Form.Group>
      </Form>
    </Container>
  );
}

export default CreatePlayerPage;
