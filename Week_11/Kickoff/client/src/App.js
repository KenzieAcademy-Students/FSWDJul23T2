import { Route, Routes } from "react-router-dom";
import "./App.css";
import { UsingReducers } from "./pages";
import { Header } from "./components";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="" element={<Dashboard />} />
        <Route path="signup" element={<UsingReducers />} />
      </Routes>
    </>
  );
}

export default App;
