import { useEffect, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import api from "../../utils/api.utils";
import { useNavigate, useParams } from "react-router-dom";

const initialFormState = {
  firstName: "",
  lastName: "",
  jerseyNum: "",
  birthday: "",
  position: "Center",
};
const AxiosPut = () => {
  const [formData, setFormData] = useState(initialFormState);
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    api
      .get("/players/" + params.id)
      .then((player) =>
        setFormData({ ...player, birthday: player.birthday.split("T")[0] })
      )
      .catch((err) => console.error(err));
  }, [params.id]);

  const handleSubmit = (e) => {
    e.preventDefault();

    api
      .put(`/players/${params.id}`, formData)
      .then(() => navigate(`/axios/get/${params.id}`))
      .catch((err) => console.error(err));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  return (
    <Container>
      <h1>Create a Player</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label htmlFor="firstName">First Name</Form.Label>
          <Form.Control
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="lastName">Last Name</Form.Label>
          <Form.Control
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="jerseyNum">Jersey Number</Form.Label>
          <Form.Control
            type="number"
            id="jerseyNum"
            name="jerseyNum"
            value={formData.jerseyNum}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="birthday">Birthday</Form.Label>
          <Form.Control
            type="date"
            id="birthday"
            name="birthday"
            value={formData.birthday}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="position">Position</Form.Label>
          <Form.Select
            aria-label="Center"
            id="position"
            name="position"
            onChange={handleInputChange}
            value={formData.position}
          >
            <option value="Center">Center</option>
            <option value="Right Wing">Right Wing</option>
            <option value="Left Wing">Left Wing</option>
            <option value="Defenseman">Defenseman</option>
            <option value="Goalie">Goalie</option>
            <option value="Enforcer">Enforcer</option>
          </Form.Select>
        </Form.Group>
        <Form.Group>
          <Button type="submit" variant="primary">
            Submit
          </Button>
        </Form.Group>
      </Form>
    </Container>
  );
};

export default AxiosPut;
