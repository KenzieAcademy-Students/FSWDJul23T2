import ships from "./data/ships.json";
import Ship from "./models/ship.model";

export default async function seedDatabase() {
  const existingShips = await Ship.find();

  for (const ship of ships) {
    if (!existingShips.some((dbShip) => dbShip.name === ship.name))
      await Ship.create(ship);
  }
}
