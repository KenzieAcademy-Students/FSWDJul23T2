import React from "react";

function PlayerCard({ player }) {
  return (
    <div className="player-card">
      <h4>
        Name: {player.firstName} {player.lastName} - No. {player.jerseyNum}
      </h4>
      <p>Position Group: {player.positionGroup}</p>
    </div>
  );
}

export default PlayerCard;
