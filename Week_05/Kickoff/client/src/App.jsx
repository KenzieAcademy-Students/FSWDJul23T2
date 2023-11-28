import { Route, Routes } from "react-router-dom";
import "./App.css";
import { AboutPage, HomePage, SignUpPage } from "./pages";
import { Header } from "./components";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="" element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="signup" element={<SignUpPage />} />
      </Routes>
    </>
  );
}

export default App;
