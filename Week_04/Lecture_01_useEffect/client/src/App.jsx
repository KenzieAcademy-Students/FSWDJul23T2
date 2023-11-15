import { useState, useEffect } from "react";
import "./App.css";
import FireIcon from "./component/FireIcon";

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  const incrementCount = (e) => setCount(count + 1);

  const decrementCount = (e) => setCount(count - 1);

  const handleArrowKeyPress = (e) => {
    if (e.key === "ArrowUp") incrementCount();
    else if (e.key === "ArrowDown") decrementCount();
  };

  /**
   * useEffect can also be used to attach event listeners
   * to the window for things like listening for key presses
   * when not focusing on specific elements
   */
  useEffect(() => {
    console.log("Key press event listener added to the window.");
    window.addEventListener("keydown", handleArrowKeyPress);

    return () => {
      console.log("Key press event listener removed from the window.");
      window.removeEventListener("keydown", handleArrowKeyPress);
    };
  }, [count]);

  return (
    <>
      <input
        type="text"
        name="name"
        id="name"
        onChange={(e) => setName(e.target.value)}
      />
      <div>
        <button onClick={decrementCount}>-</button>
        {count >= 10 && count <= 20 && <FireIcon />}
        <span>
          {name}'s Count: {count}
        </span>
        <button onClick={incrementCount}>+</button>
      </div>
    </>
  );
}

export default App;
