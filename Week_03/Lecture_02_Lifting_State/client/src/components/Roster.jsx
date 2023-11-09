import React, { useState } from "react";
import PlayerCard from "./PlayerCard";
import "./Roster.css";

function Roster({ teamName, playerList, filterByPosition, addGamePlayed }) {
  return (
    <main className="container">
      <h2 className="text-center">{teamName}</h2>
      <select onChange={(e) => filterByPosition(e.target.value)}>
        <option value="">Select Position Group</option>
        <option value="QB">QB</option>
        <option value="OL">OL</option>
        <option value="WR">WR</option>
        <option value="RB">RB</option>
      </select>
      <div className="container roster">
        {playerList.map((player, i) => (
          <PlayerCard
            key={i}
            player={player}
            addGamePlayed={(e) => addGamePlayed(player.jerseyNum)}
          />
        ))}
      </div>
    </main>
  );
}

export default Roster;
