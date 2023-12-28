import { useEffect, useState } from "react";
import { Button, Col, Container, Row, Modal, Form } from "react-bootstrap";
import { useParams } from "react-router-dom";
import api from "../utils/api.config";
import { toast } from "react-toastify";

function TeamDetailsPage() {
  const [team, setTeam] = useState();
  const [show, setShow] = useState(false);
  const [year, setYear] = useState("");
  const { abbrev } = useParams();

  const handleShow = () => setShow(true);
  const handleHide = () => setShow(false);

  useEffect(() => {
    api
      .get(`/teams/${abbrev}`)
      .then((res) => setTeam(res.data))
      .catch((err) => console.log(err));
  }, [abbrev]);

  const handleUpdate = (e) => {
    e.preventDefault();

    api
      .put(`/teams/${abbrev}/superbowl`, { year })
      .then((res) => {
        setTeam(res.data);
        setYear("");
        handleHide();
      })
      .catch((err) => console.log(err));
  };

  if (!team) {
    return (
      <Container>
        <p>Loading...</p>
      </Container>
    );
  }

  return (
    <>
      <Container>
        <h1>
          {team.location} {team.teamName}
        </h1>
        <p>Est. {team.yearEstablished}</p>
        <Row>
          <Col as="section">
            <h3>Super Bowl Appearances</h3>
            <ul>
              {team.superBowlAppearances.map((year) => (
                <li key={year}>{year}</li>
              ))}
            </ul>
          </Col>
        </Row>
        <Row>
          <Col
            xs={12}
            md={{ span: 6, offset: 3 }}
            lg={{ span: 4, offset: 4 }}
            as={Button}
            variant="primary"
            onClick={handleShow}
          >
            Add Super Bowl Appearance
          </Col>
        </Row>
      </Container>
      {/* 
        The following modal is for updating a team (i.e. adding 
          a new super bowl appearance year)
      */}
      <Modal show={show} onHide={handleHide}>
        <Form onSubmit={handleUpdate}>
          <Modal.Header>
            <Modal.Title>Add a Super Bowl Appearance</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group>
              <Form.Label htmlFor="year">Year:</Form.Label>
              <Form.Control
                id="year"
                name="year"
                value={year}
                onChange={(e) => setYear(e.target.value)}
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button type="submit" variant="primary">
              Add Year
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
}

export default TeamDetailsPage;
