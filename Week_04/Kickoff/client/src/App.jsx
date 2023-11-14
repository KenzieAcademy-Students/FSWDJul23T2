import { useState } from "react";
import "./App.css";
import LifecycleDemo from "./components/LifecycleDemo";
import AsyncDemo from "./components/AsyncDemo";

function App() {
  const [showComponent, setShowComponent] = useState(false);
  return (
    <>
      <AsyncDemo />
      <button onClick={(e) => setShowComponent(!showComponent)}>
        {showComponent ? "Hide" : "Show"} Component
      </button>

      {showComponent && <LifecycleDemo />}
    </>
  );
}

export default App;
