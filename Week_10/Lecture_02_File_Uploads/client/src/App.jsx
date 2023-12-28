import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Header } from "./components";
import AllPlayersPage from "./pages/AllPlayersPage";
import LandingPage from "./pages/LandingPage";
import CreatePlayerPage from "./pages/CreatePlayerPage";
import PlayerDetailPage from "./pages/PlayerDetailPage";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/players" element={<AllPlayersPage />} />
        <Route path="/players/:playerId" element={<PlayerDetailPage />} />
        <Route path="/players/create" element={<CreatePlayerPage />} />
      </Routes>
    </>
  );
}

export default App;
