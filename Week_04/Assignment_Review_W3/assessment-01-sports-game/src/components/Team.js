import "./Team.css";

function Team({ name, logo, shotsTaken, score, shoot }) {
  const shotPercentage = score / shotsTaken;

  return (
    <div className="team-card">
      <h3>{name}</h3>
      <img src={logo} alt={name} className="team-logo" />
      <ul className="team-stats">
        <li>SOG: {shotsTaken}</li>
        <li>G: {score}</li>
        {shotsTaken > 0 ? (
          <li>PCT: {shotPercentage.toFixed(3)}</li>
        ) : (
          <li className="empty-stat"></li>
        )}
        <li>
          <button onClick={shoot}>Shoot</button>
        </li>
      </ul>
    </div>
  );
}

export default Team;
