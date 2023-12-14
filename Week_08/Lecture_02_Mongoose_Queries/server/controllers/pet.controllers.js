import { findAllPetsOfType, insertPetDocument } from "../services/pet.services";
import Pet from "../models/pet.models";

export async function handleCreatePet(req, res) {
  // Step 1: Pull the necessary fields from the request body
  const { name, photoUrl, petType, breed, hasRabiesVaccine } = req.body;

  // Step 2: Use a try/catch block for the insertPetDocument function to catch
  // validation errors
  try {
    // Step 3: Call the insertPetDocument function
    const newPet = await Pet.create({
      name,
      photoUrl,
      petType,
      breed,
      hasRabiesVaccine,
    });

    // Step 4: Return a .json response with the newly created document
    res.status(201).json(newPet);
  } catch (error) {
    // Step 5: If an error was caught in the validation/creation process,
    // catch it and return the errors as a json response with a 422 status
    // indicating invalid submission
    return res.status(422).json(error.errors);
  }
}

export async function handleGetAllPets(req, res) {
  // Step 1: Use the Pet model's .find() method with no parameters,
  // or an empty object as a parameter.
  const allPets = await Pet.find();

  res.status(200).json(allPets);
}

export async function handleGetPetsOfType(req, res) {
  // Step 1: Pull the type of pet from the route parameters
  const { petType } = req.params;

  // Step 2: Call the findAllPetsOfType function, and pass in
  // the petType parameter
  const pets = await findAllPetsOfType(petType);

  // Step 3: Return the results.
  res.status(200).json(pets);
}
