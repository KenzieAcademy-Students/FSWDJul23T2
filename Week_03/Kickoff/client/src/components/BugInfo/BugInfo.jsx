import React, { useState } from "react";
import "./BugInfo.css";

function BugInfo({ bug, resolveBug }) {
  const [data, setData] = useState("");
  const [displayForm, setDisplayForm] = useState(false);

  const toggleForm = () => setDisplayForm(!displayForm);

  const handleResolve = (e) => {
    e.preventDefault();
    resolveBug(bug.id, data);
    setDisplayForm(false);
  };

  return (
    <div className="bug-card flex-col">
      <div className="flex-col">
        <h4>Bug Description:</h4>
        <p className={bug.resolved ? "strike-through" : ""}>
          {bug.description}
        </p>
      </div>
      <div className="flex-row justify-between">
        <p>Status: {bug.resolved ? "Closed" : "Open"}</p>
        {bug.resolved && <p>Resolution: {bug.resolution}</p>}
      </div>
      {!bug.resolved && !displayForm && (
        <button onClick={toggleForm}>Resolve</button>
      )}

      {displayForm && (
        <form onSubmit={handleResolve}>
          <div className="form-group">
            <label htmlFor="resolution">Resolution: </label>
            <textarea
              name="resolution"
              id="resolution"
              cols="30"
              rows="3"
              placeholder="Enter resolution description"
              onChange={(e) => setData(e.target.value)}
            />
          </div>
          <div className="form-group">
            <button type="submit">Close Ticket</button>
          </div>
        </form>
      )}
    </div>
  );
}

export default BugInfo;
