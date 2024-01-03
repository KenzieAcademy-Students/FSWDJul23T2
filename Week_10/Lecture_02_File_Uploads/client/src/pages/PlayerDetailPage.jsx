import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { getPlayerById } from "../services/players.service";
import { AvatarUploader } from "../components";
import api from "../utils/api.config";

function PlayerDetailPage() {
  const [player, setPlayer] = useState();
  const [openUpdateAvatar, setOpenUpdateAvatar] = useState(false);
  const { playerId } = useParams();
  const navigate = useNavigate();

  const handleUpdatePlayerPhoto = (path) => {
    api
      .put(`/players/${player._id}`, { imageUrl: path })
      .then((res) => {
        console.log(res);
        setPlayer({ ...player, imageUrl: res.data.imageUrl });
        setOpenUpdateAvatar(false);
      })
      .catch((err) => console.log("oh no"));
  };

  useEffect(() => {
    getPlayerById(playerId)
      .then((res) => setPlayer(res.data))
      .catch((err) => navigate("/players"));
  }, [playerId]);

  if (!player)
    return (
      <Container>
        <h1>Loading...</h1>
      </Container>
    );

  return (
    <Container>
      <img
        className="player-photo"
        src={player.imageUrl}
        alt={`${player.firstName} ${player.lastName}`}
      />
      <Row>
        <h1>
          {player.firstName} {player.lastName}
        </h1>
        <p>
          No. {player.jerseyNum} - {player.position}
        </p>
      </Row>
      <span onClick={() => setOpenUpdateAvatar(!openUpdateAvatar)}>
        Change Picture
      </span>
      <Row>
        {openUpdateAvatar && (
          <AvatarUploader setAvatarPath={handleUpdatePlayerPhoto} />
        )}
      </Row>
    </Container>
  );
}

export default PlayerDetailPage;
