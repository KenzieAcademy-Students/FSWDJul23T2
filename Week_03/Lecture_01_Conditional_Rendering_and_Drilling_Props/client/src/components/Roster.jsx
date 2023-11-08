import React from "react";
import PlayerCard from "./PlayerCard";

function Roster({ playerList }) {
  const renderPlayerCard = (player, i) => (
    <PlayerCard key={`player-${i}`} player={player} />
  );

  return <div className="container">{playerList.map(renderPlayerCard)}</div>;
}

export default Roster;
