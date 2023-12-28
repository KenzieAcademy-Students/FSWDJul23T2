import { Player } from "../models";

export async function handleCreatePlayer(req, res) {
  const { firstName, lastName, jerseyNum, position, imageUrl } = req.body;

  const newPlayer = await Player.create({
    firstName,
    lastName,
    jerseyNum,
    position,
    imageUrl,
  });

  res.json(newPlayer.toJSON());
}

export async function handleGetAllPlayers(req, res) {
  const players = await Player.find();
  res.json(players.map((player) => player.toJSON()));
}

export async function handleGetPlayerById(req, res) {
  const { playerId } = req.params;

  const player = await Player.findById(playerId);

  if (!player) return res.sendStatus(404);

  res.json(player.toJSON());
}

export async function handleUpdatePlayer(req, res) {
  const { playerId } = req.params;

  const updatedPlayer = await Player.findByIdAndUpdate(playerId, req.body, {
    new: true,
    runValidators: true,
  });

  if (!updatedPlayer) return res.sendStatus(404);

  res.json(updatedPlayer.toJSON());
}

export async function handleDeletePlayer(req, res) {
  const { playerId } = req.params;

  const deletedPlayer = await Player.findByIdAndDelete(playerId);

  if (!deletedPlayer) return res.sendStatus(404);

  res.json(deletedPlayer);
}
