import { useState } from "react";
import "./App.css";
import BugInfo from "./components/BugInfo/BugInfo";

const initialState = [
  {
    id: 1,
    description:
      "Vite app fails to run. Error message reads [plugin:vite:react-swc] Bindings not found",
    resolved: false,
    resolution: "",
  },
  {
    id: 2,
    description:
      "Upon running a new react app with vite, the default page still shows despite the new application containing different content.",
    resolved: false,
    resolution: "",
  },
];

function App() {
  const [bugs, setBugs] = useState(initialState);

  const resolveBug = (id, resolution) => {
    const bugsCopy = structuredClone(bugs);

    const bugToToggle = bugsCopy.find((bug) => bug.id === id);
    bugToToggle.resolved = true;
    bugToToggle.resolution = resolution;
    setBugs(bugsCopy);
  };

  return (
    <div className="bug-board">
      {bugs.map((bug) => (
        <BugInfo key={`bug_${bug.id}`} bug={bug} resolveBug={resolveBug} />
      ))}
    </div>
  );
}

export default App;
