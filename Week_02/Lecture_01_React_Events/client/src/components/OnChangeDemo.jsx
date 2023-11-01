import React from "react";

function OnChangeDemo() {
  /*
    Step 1: Define your event handler

    When using the onChange event listener,
    the handler can access both the name of the input
    being modified, as well as the value of the input
    itself. This is going to be tremendously useful
    in just a few weeks when we talk about objects in
    state (state will be talked about tomorrow).
  */
  const handleChange = (e) => {
    const inputName = e.target.name;
    const inputValue = e.target.value;
    console.log(`${inputName}: ${inputValue}`);
  };

  return (
    <div>
      {/* 
        Step 2: Attach the onChange event listener to the input, 
        select, or textarea element (among others). 
        
        The onChange event listener is designed to be used with any kind of 
        form input that can be modified by the user.
      */}
      <label>
        First Name:
        <input type="text" name="firstName" onChange={handleChange} />
      </label>
      <br />
      <label>
        Last Name:
        <input type="text" name="lastName" onChange={handleChange} />
      </label>
      <br />
      <label>
        Email:
        <input type="text" name="email" onChange={handleChange} />
      </label>
    </div>
  );
}

export default OnChangeDemo;
