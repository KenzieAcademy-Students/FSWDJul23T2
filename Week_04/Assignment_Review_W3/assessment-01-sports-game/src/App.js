import "./App.css";
import Game from "./components/Game";

function App() {
  return (
    <div className="App">
      <h1>Hockey Night on ESPN+</h1>
      <Game
        venue="Crypto.com Arena"
        homeTeam={{
          name: "Los Angeles Kings",
          logo: "https://assets.nhle.com/logos/nhl/svg/LAK_dark.svg",
        }}
        awayTeam={{
          name: "Florida Panthers",
          logo: "https://assets.nhle.com/logos/nhl/svg/FLA_dark.svg",
        }}
      />
      <Game
        venue="Climate Pledge Arena"
        homeTeam={{
          name: "Seattle Kraken",
          logo: "https://assets.nhle.com/logos/nhl/svg/SEA_dark.svg",
        }}
        awayTeam={{
          name: "New York Islanders",
          logo: "https://assets.nhle.com/logos/nhl/svg/NYI_dark.svg",
        }}
      />
    </div>
  );
}

export default App;
