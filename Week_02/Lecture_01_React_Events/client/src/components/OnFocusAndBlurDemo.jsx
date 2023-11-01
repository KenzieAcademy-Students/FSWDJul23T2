import React from "react";

function OnFocusAndBlurDemo() {
  return (
    <div>
      <input
        type="text"
        name="focus-blur"
        onFocus={(e) => e.target.classList.add("focused")}
        onBlur={(e) => e.target.classList.remove("focused")}
      />
    </div>
  );
}

export default OnFocusAndBlurDemo;
