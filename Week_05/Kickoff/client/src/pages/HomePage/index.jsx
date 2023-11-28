import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="container">
      <h1>Welcome to Week 5</h1>
      <p>
        Welcome to the site. If you would like to access more stuff, please sign
        up by clicking <Link to="/signup">here.</Link>
      </p>
    </div>
  );
}

export default HomePage;
