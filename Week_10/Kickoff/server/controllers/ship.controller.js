import Ship from "../models/ship.model";

export async function getAllShips(req, res, next) {
  try {
    let { limit, offset } = req.query;
    if (limit == null) limit = 20;
    else if (limit > 20) limit = 20;

    const shipCount = await Ship.countDocuments();
    if (offset == null) offset = 0;
    else if (offset - shipCount < 0) offset = 0;
    else if (offset > shipCount) offset = 0;

    const allShips = await Ship.find({}).limit(limit).skip(offset);

    res.json({
      count: shipCount,
      next:
        shipCount > allShips.length
          ? `http://localhost:3001/api/pirates?limit=${limit}&offset=${
              offset + limit
            }`
          : null,
      prev:
        offset === 0
          ? null
          : `http://localhost:3001/api/pirates?limit=${limit}&offset=${
              offset - limit
            }`,
      results: allShips,
    });
  } catch (error) {
    next(error);
  }
}

export async function createShip(req, res, next) {
  try {
    const { shipName, crewMembers } = req.body;

    const newShip = await Ship.create({ shipName, crewMembers });

    res.json(newShip);
  } catch (error) {
    next(error);
  }
}

export async function addCrewToShip(req, res, next) {
  try {
    const { id } = req.params;
    const { crewMemberId } = req.body;
    const updatedShip = await Ship.findByIdAndUpdate(
      id,
      { $addToSet: { crewMembers: crewMemberId } },
      { new: true, runValidators: true }
    ).populate("crewMembers");

    if (!updatedShip) return res.sendStatus(404);

    res.json(updatedShip);
  } catch (error) {
    next(error);
  }
}

export async function getShipCrew(req, res, next) {
  try {
    const { id } = req.params;

    const crewMembers = await Ship.findById(id)
      .populate("crewMembers")
      .select("crewMembers");

    res.json(crewMembers);
  } catch (error) {
    next(error);
  }
}

export async function deleteCrewmemberFromShip(req, res, next) {
  try {
    const { id } = req.params;
    const { crewMemberId } = req.body;

    const shipAfterCrewmemberDeletion = await Ship.findByIdAndUpdate(
      id,
      {
        $pull: { crewMembers: crewMemberId },
      },
      { new: true, runValidators: true }
    );

    if (!shipAfterCrewmemberDeletion) return res.sendStatus(404);

    res.json(shipAfterCrewmemberDeletion);
  } catch (error) {
    next(error);
  }
}

export async function getShipById(req, res, next) {
  try {
    const { id } = req.params;

    const ship = await Ship.findById(id).populate("crewMembers");

    if (!ship) return res.sendStatus(404);

    res.json(ship);
  } catch (error) {
    next(error);
  }
}
