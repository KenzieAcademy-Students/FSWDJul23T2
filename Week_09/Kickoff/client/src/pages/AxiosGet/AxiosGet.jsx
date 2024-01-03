import { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import api from "../../utils/api.utils";
import { Link, Outlet } from "react-router-dom";

const AxiosGet = () => {
  const [allPlayers, setAllPlayers] = useState({});

  useEffect(() => {
    fetchPlayers();
  }, []);

  const fetchPlayers = (url = "/players") => {
    api
      .get(url)
      .then((data) => setAllPlayers(data))
      .catch((err) => console.error(err));
  };

  const deletePlayer = (id) => {
    api
      .delete(`/players/${id}`)
      .then(() =>
        setAllPlayers({
          ...allPlayers,
          players: allPlayers.players.filter((player) => player._id !== id),
        })
      )
      .catch((err) => console.error(err));
  };

  return (
    <Container>
      <Row>
        <Col as="section" xs={12} md={6}>
          <h2>Get All Players</h2>
          <ul>
            {allPlayers.players &&
              allPlayers.players.map((player) => (
                <li key={player._id}>
                  <Link to={`/axios/get/${player._id}`}>
                    {player.firstName} {player.lastName}
                  </Link>
                  -
                  <Button
                    as={Link}
                    variant="link"
                    to={`/axios/put/${player._id}`}
                  >
                    Edit
                  </Button>
                  |{" "}
                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() => deletePlayer(player._id)}
                  >
                    Delete
                  </Button>
                </li>
              ))}
          </ul>
          <Row>
            <Col
              as={Button}
              disabled={!allPlayers.prev}
              onClick={() => fetchPlayers(allPlayers.prev)}
            >
              Previous
            </Col>
            <Col
              as={Button}
              disabled={!allPlayers.next}
              onClick={() => fetchPlayers(allPlayers.next)}
            >
              Next
            </Col>
          </Row>
        </Col>
        <Col as="section" xs={12} md={6}>
          <h2>Get One Player</h2>
          <Outlet />
        </Col>
      </Row>
    </Container>
  );
};

export default AxiosGet;
