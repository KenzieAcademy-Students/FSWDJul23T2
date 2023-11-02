import "./App.css";
import PlayerInfo from "./components/PlayerInfo";

function App() {
  const sgtBobPhoto =
    "https://a.espncdn.com/combiner/i?img=/i/headshots/nhl/players/full/5571.png&w=350&h=254";
  return (
    <>
      <PlayerInfo
        playerName="Sergei Bobrovsky"
        jerseyNum="72"
        imgUrl={sgtBobPhoto}
        goals={0}
      />
      <PlayerInfo
        playerName="Alexander Barkov"
        jerseyNum="16"
        imgUrl="https://a.espncdn.com/combiner/i?img=/i/headshots/nhl/players/full/3041970.png&w=350&h=254"
        goals={2}
      />
    </>
  );
}

export default App;
