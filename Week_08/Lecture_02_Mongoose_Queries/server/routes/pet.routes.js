import { Router } from "express";
import {
  handleCreatePet,
  handleGetAllPets,
  handleGetPetsOfType,
} from "../controllers/pet.controllers";
import { updatePetWithId } from "../services/pet.services";
import Pet from "../models/pet.models";

// Router URL: /api/pets
const petRoutes = Router();

petRoutes
  //  /api/pets
  .route("/")
  // POST /api/pets - Create a new pet
  .post(handleCreatePet)
  // GET /api/pets - Find all pets in the pets collection
  .get(handleGetAllPets);

petRoutes
  //  /api/pets/:petId
  .route("/:petId")
  // PUT /api/pets/:petId - Update a pet's favoriteActivities and timesRehomed
  .put(async (req, res) => {
    const { petId } = req.params;
    const { favoriteActivities, timesRehomed } = req.body;

    if (!favoriteActivities && !timesRehomed) {
      return res.status(422).json({
        error:
          "You must provide a combination of the favorite activities and times rehomed fields.",
      });
    }

    try {
      const updatedPet = await updatePetWithId(
        petId,
        favoriteActivities,
        timesRehomed
      );
      if (!updatedPet) {
        return res.status(404).json({ error: "Pet not found" });
      } else {
        return res.status(200).json(updatedPet);
      }
    } catch (error) {
      if (error.name === "CastError") {
        return res.status(422).json({ _id: "Invalid ID type." });
      } else {
        return res.status(422).json(error.errors);
      }
    }
  })
  // DELETE /api/pets/:petId - Delete the pet document with the parameter's petId as its id
  .delete(async (req, res) => {
    // Step 1: Pull the petId from req.params
    const { petId } = req.params;

    try {
      // Step 2: Call the Pet models' .findByIdAndDelete() method, passing
      // the petId in
      const deletedPet = await Pet.findByIdAndDelete(petId);

      if (!deletedPet) {
        return res.status(404).json({ error: "Pet not found" });
      }
      res.status(200).json(deletedPet);
    } catch (error) {
      if (error.name === "CastError") {
        return res.status(422).json({ _id: "Invalid ID type." });
      } else {
        return res.sendStatus(500);
      }
    }
  });

petRoutes
  //  /api/pets/type/:petType
  .route("/type/:petType")
  // GET /api/pets/type/:petType - Find all pets of a given type
  .get(handleGetPetsOfType);

export default petRoutes;
