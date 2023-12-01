import { Route, Routes } from "react-router-dom";
import Welcome from "./components/Welcome";
import About from "./components/About";
import Contact from "./components/Contact";
import "./App.css";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default App;
