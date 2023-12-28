import Player from "../models/player.model";
import { getThirtyYearBirthday } from "../utils/age.utils";

export async function createPlayerHandler(req, res, next) {
  const { firstName, lastName, jerseyNum, birthday, position } = req.body;

  try {
    const playerDocument = await Player.create({
      firstName,
      lastName,
      jerseyNum,
      birthday,
      position,
    });

    const newPlayer = playerDocument.toObject();
    res.json(newPlayer);
  } catch (error) {
    next(error);
  }
}

export async function findAllPlayersHandler(req, res, next) {
  try {
    let { limit, offset } = req.query;

    offset = offset ? Number(offset) : 0;
    limit = limit ? Number(limit) : 20;

    const allPlayerDocuments = await Player.find(queryParams)
      .skip(offset)
      .limit(limit);

    res.json({
      next:
        allPlayerDocuments.length === 20
          ? `http://localhost:3001/api/players?limit=${limit}&offset=${
              offset + limit
            }`
          : null,
      prev:
        offset - limit < 0
          ? null
          : `http://localhost:3001/api/players?limit=${limit}&offset=${
              offset - limit
            }`,
      players: allPlayerDocuments,
    });
  } catch (error) {
    next(error);
  }
}

export async function findPlayerByIdHandler(req, res, next) {
  const { playerId } = req.params;
  try {
    const playerDocument = await Player.findById(playerId);

    if (playerDocument === null) throw { name: "NotFoundError" };

    res.json(playerDocument);
  } catch (error) {
    next(error);
  }
}
export async function findPlayersByPositionHandler(req, res, next) {
  const { position } = req.params;
  try {
    const playersAtPosition = await Player.find({
      position: { $regex: new RegExp(position, "i") },
    });

    res.json(playersAtPosition);
  } catch (error) {
    next(error);
  }
}

export async function findPlayersOverThirtyHandler(req, res, next) {
  try {
    const olderThanThirty = await Player.find({
      birthday: { $lt: getThirtyYearBirthday() },
    });

    res.json(olderThanThirty);
  } catch (error) {
    next(error);
  }
}

export async function updatePlayerByIdHandler(req, res, next) {
  const { playerId } = req.params;
  const { firstName, lastName, jerseyNum, birthday, position } = req.body;
  try {
    const updatedPlayer = await Player.findByIdAndUpdate(
      playerId,
      {
        firstName,
        lastName,
        jerseyNum,
        birthday,
        position,
      },
      { new: true, runValidators: true }
    );

    if (updatedPlayer === null) throw { name: "NotFoundError" };

    res.json(updatedPlayer);
  } catch (error) {
    next(error);
  }
}
export async function deletePlayerByIdHandler(req, res, next) {
  const { playerId } = req.params;

  try {
    const result = await Player.findOneAndDelete({ _id: playerId });

    if (result === null) throw { name: "NotFoundError" };

    res.json(result);
  } catch (error) {
    next(error);
  }
}
