import api from "../utils/api.config";

export async function getAllPlayers() {
  return api.get("/players");
}

export async function postNewPlayer(
  firstName,
  lastName,
  jerseyNum,
  position,
  imageUrl
) {
  return api.post("/players", {
    firstName,
    lastName,
    jerseyNum,
    position,
    imageUrl,
  });
}

export async function getPlayerById(playerId) {
  return api.get(`/players/${playerId}`);
}

export async function deletePlayer(playerId) {
  return api.delete(`/players/${playerId}`);
}

export async function putPlayer(playerId, body) {
  return api.put(`/players/${playerId}`, body);
}
