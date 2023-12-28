import { useParams } from "react-router-dom";
import api from "../../utils/api.utils";
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";

const PlayerDetail = () => {
  const [player, setPlayer] = useState();
  const params = useParams();

  useEffect(() => {
    fetchSinglePlayer(params.id);
  }, [params.id]);

  const fetchSinglePlayer = (id) => {
    api
      .get(`/players/${id}`)
      .then((data) => setPlayer(data))
      .catch((err) => console.error(err));
  };

  if (!player)
    return (
      <Container>
        <p>Loading...</p>
      </Container>
    );

  return (
    <Container>
      <h3>
        {player.firstName} {player.lastName} - #{player.jerseyNum}
      </h3>
      <p>Position: {player.position}</p>
      <p>Birthday: {new Date(player.birthday).toLocaleDateString()}</p>
    </Container>
  );
};

export default PlayerDetail;
