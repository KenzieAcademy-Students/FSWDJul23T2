import { useState } from "react";

function PlayerInfo({ playerName, jerseyNum, imgUrl, goals }) {
  const [goalsScored, setGoalsScored] = useState(goals);

  const addGoal = (e) => {
    setGoalsScored(goalsScored + 1);
  };

  return (
    <div className="player-card">
      <div>
        <strong>Player Name: </strong>
        <span>{playerName}</span>
      </div>
      <div>
        <strong>Jersey Number: </strong>
        <span>{jerseyNum}</span>
      </div>
      <img src={imgUrl} alt={playerName} />
      <div>
        <strong>Goals: </strong>
        <span>{goalsScored}</span>
      </div>
      <button onClick={addGoal}>Add Goal</button>
    </div>
  );
}

export default PlayerInfo;
