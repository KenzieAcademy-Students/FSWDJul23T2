import "./App.css";
import { Header } from "./components";
import { Routes, Route } from "react-router-dom";
import { HomePage, About, Contact } from "./pages";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
