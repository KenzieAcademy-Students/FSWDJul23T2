import React from "react";

function CharacterListItem({ character }) {
  return (
    <li>
      <strong>{character.name}</strong>, born {character.birth_year}
    </li>
  );
}

export default CharacterListItem;
