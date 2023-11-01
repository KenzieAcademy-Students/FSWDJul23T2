import React from "react";

// export function someFunction() {
//   console.log("boo");
// }

function OnClickDemo() {
  // Step 1: Define the event handler
  const handleClick = (event) => {
    alert("Thanks for clicking the useless button.");
  };

  return (
    <div>
      {/* Step 2: Attach the event handler to the appropriate event listener */}
      <button onClick={handleClick}>This button does nothing.</button>
    </div>
  );
}

export default OnClickDemo;
