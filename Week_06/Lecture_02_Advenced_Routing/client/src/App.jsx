import { Route, Routes } from "react-router-dom";
import "./App.css";
import {
  Header,
  Scores,
  Standings,
  Teams,
  LeagueHome,
  OtherSports,
} from "./components";
import { League } from "./pages";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path=":league" element={<League />}>
          <Route path="" element={<LeagueHome />} />
          <Route path="standings" element={<Standings />} />
          <Route path="scores" element={<Scores />} />
          <Route path="teams" element={<Teams />} />
          <Route path=":sport" element={<OtherSports />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
