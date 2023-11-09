import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Roster from "./components/Roster";
import players from "./players";
import PlayerCount from "./components/PlayerCount";

function App() {
  const [selectedPlayers, setSelectedPlayers] = useState(players);

  const filterPlayersByPosition = (positionGroup) => {
    setSelectedPlayers(
      players.filter((player) => player.positionGroup.includes(positionGroup))
    );
  };

  const addPlayerGamePlayed = (jerseyNum) => {
    setSelectedPlayers(
      selectedPlayers.map((player) => {
        if (player.jerseyNum === jerseyNum) {
          player.gamesPlayed++;
        }

        return player;
      })
    );
  };

  return (
    <>
      <Header />
      <PlayerCount count={selectedPlayers.length} />
      <Roster
        teamName="Philadelphia Eagles"
        playerList={selectedPlayers}
        filterByPosition={filterPlayersByPosition}
        addGamePlayed={addPlayerGamePlayed}
      />
    </>
  );
}

export default App;
