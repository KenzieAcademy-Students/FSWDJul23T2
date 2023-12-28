import React, { useEffect, useState } from "react";
import { deletePlayer, getAllPlayers } from "../services/players.service";
import { Button, Container, Table } from "react-bootstrap";
import { Link } from "react-router-dom";

function AllPlayersPage() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    getAllPlayers().then((res) => setPlayers(res.data));
  }, []);

  console.log(players);
  return (
    <Container>
      <h1>All the players</h1>
      <Table>
        <thead>
          <tr>
            <th>Name</th>
            <th>No.</th>
            <th>Position</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {players.map((player) => (
            <tr key={player._id}>
              <td>
                <img
                  className="player-thumbnail me-2"
                  src={player.imageUrl}
                  alt={`${player.firstname} ${player.lastName}`}
                />
                <Link to={`/players/${player._id}`}>
                  {player.firstName} {player.lastName}
                </Link>
              </td>
              <td>{player.jerseyNum}</td>
              <td>{player.position}</td>
              <td>
                <Button
                  variant="danger"
                  onClick={() => deletePlayer(player._id)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}

export default AllPlayersPage;
