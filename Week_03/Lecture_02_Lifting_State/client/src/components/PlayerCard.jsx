import React from "react";
import "./PlayerCard.css";

function PlayerCard({ player, addGamePlayed }) {
  const fullName = `${player.firstName} ${player.lastName}`;

  return (
    <div className="card">
      <div className="info">
        <h4>{fullName}</h4>
        <p className="text-center">
          #{player.jerseyNum} - {player.positionGroup}
        </p>
      </div>
      <img className="headshot" src={player.imgUrl} alt={fullName} />
      <h5>Stats</h5>
      <div className="stats">
        <p>Games Played: {player.gamesPlayed}</p>
        <button onClick={addGamePlayed}>Add GP</button>
      </div>
    </div>
  );
}

export default PlayerCard;
