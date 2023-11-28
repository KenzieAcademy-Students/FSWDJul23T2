import React from "react";

function HomePage() {
  console.log("if you can read this, the HomePage component has run.");

  return (
    <div className="container">
      <h1>Welcome to NotIndeed</h1>
      <section>
        <h3>What is NotIndeed</h3>
        <p>
          NotIndeed is a totally fake job searching site that won't get you any
          jobs because it's not real.
        </p>
      </section>
    </div>
  );
}

export default HomePage;
