import Ship from "../models/ship.model";

export async function findAllShips(req, res) {
  try {
    const allShips = await Ship.find();

    res.json(allShips);
  } catch (error) {
    res.sendStatus(500);
  }
}

export async function findShipById(req, res) {
  const { id } = req.params;
  if (!id) return res.status(422).json({ error: "Invalid id" });
  try {
    const ship = await Ship.findById(id);
    if (!ship) return res.status(404).json({ error: "Not found" });

    res.json(ship);
  } catch (error) {
    res.sendStatus(500);
  }
}

export async function findRecentlyViewedShipsByIds(req, res, next) {
  if (!req.query.ids) return next();

  let ids = req.query.ids.split(",");

  try {
    const recentlyViewedShips = await Ship.find({ _id: ids });

    res.json(recentlyViewedShips);
  } catch (error) {
    // console.log(error);
    res.sendStatus(500);
  }
}
