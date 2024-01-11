import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Header } from "./components";
import { AllShipsPage, ShipDetailsPage, UserPreferences } from "./pages";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="ships" element={<AllShipsPage />} />
        <Route path="ships/:id" element={<ShipDetailsPage />} />
        <Route path="preferences" element={<UserPreferences />} />
      </Routes>
    </>
  );
}

export default App;
