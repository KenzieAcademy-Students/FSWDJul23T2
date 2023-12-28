import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Header } from "./components";
import { AllTeamsPage, CreateTeamPage, TeamDetailsPage } from "./pages";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/teams" element={<AllTeamsPage />} />
        <Route path="/teams/new" element={<CreateTeamPage />} />
        <Route path="/teams/:abbrev" element={<TeamDetailsPage />} />
      </Routes>
    </>
  );
}

export default App;
