import React from "react";

function OnSubmitDemo() {
  // Step 1: Define your event handler function
  // Always use the event.preventDefault() method within a submit handler
  const handleSubmit = (e) => {
    e.preventDefault();

    // Using e.target, access the value typed into the input
    // and make an alert pop up saying "thank you ____"
    const inputValue = e.target[0].value;
    alert(`Thank you ${inputValue}`);
  };

  return (
    <div>
      {/* Step 2: Attach the onSubmit event listener to the form element. */}
      <form onSubmit={handleSubmit}>
        <input type="text" name="test" />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default OnSubmitDemo;
