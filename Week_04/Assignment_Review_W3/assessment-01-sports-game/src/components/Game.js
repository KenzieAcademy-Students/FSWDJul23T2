import { useState } from "react";
import "./Game.css";
import Team from "./Team";

function Game({ venue, homeTeam, awayTeam }) {
  const [homeShotsTaken, setHomeShotsTaken] = useState(0);
  const [homeScore, setHomeScore] = useState(0);
  const [homeWins, setHomeWins] = useState(0);
  const [awayShotsTaken, setAwayShotsTaken] = useState(0);
  const [awayScore, setAwayScore] = useState(0);
  const [awayWins, setAwayWins] = useState(0);
  const [resetCount, setResetCount] = useState(0);

  const shoot = (shots, score, setShots, setScore) => {
    setShots(shots + 1);

    if (Math.round(Math.random())) {
      setScore(score + 1);
    }
  };

  const resetMatchup = () => {
    if (homeScore === awayScore) {
      alert("Cannot end game while tied!");
      return;
    }

    if (homeScore > awayScore) {
      setHomeWins(homeWins + 1);
    } else if (homeScore < awayScore) {
      setAwayWins(awayWins + 1);
    }
    setHomeScore(0);
    setHomeShotsTaken(0);
    setAwayScore(0);
    setAwayShotsTaken(0);
    setResetCount(resetCount + 1);
  };

  const shootHome = () =>
    shoot(homeShotsTaken, homeScore, setHomeShotsTaken, setHomeScore);

  const shootAway = () =>
    shoot(awayShotsTaken, awayScore, setAwayShotsTaken, setAwayScore);

  return (
    <div className="game">
      <h2>Welcome to {venue}</h2>
      <div className="matchup">
        <Team
          name={homeTeam.name}
          logo={homeTeam.logo}
          shotsTaken={homeShotsTaken}
          score={homeScore}
          shoot={shootHome}
        />
        <div className="versus-col">
          <span>
            {homeWins} - {awayWins}
          </span>
          <strong>vs.</strong>
          <button onClick={resetMatchup}>Reset</button>
          <span>Reset Count: {resetCount}</span>
        </div>
        <Team
          name={awayTeam.name}
          logo={awayTeam.logo}
          shotsTaken={awayShotsTaken}
          score={awayScore}
          shoot={shootAway}
        />
      </div>
    </div>
  );
}

export default Game;
