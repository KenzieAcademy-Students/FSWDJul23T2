import React, { useState } from "react";

function AsyncDemo() {
  const [count, setCount] = useState(0);

  const incrementAndAlert = () => {
    setCount(count + 1);

    if (count === 10) {
      alert("Congratulations for meeting this milestone. Count is now 10");
    }
  };

  return (
    <div>
      <h1>Async Demo</h1>
      <p>Count: {count}</p>
      <button onClick={incrementAndAlert}>Increment</button>
    </div>
  );
}

export default AsyncDemo;
