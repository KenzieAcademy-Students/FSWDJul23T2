import Pet from "../models/pet.models";

export async function insertPetDocument(
  name,
  photoUrl,
  petType,
  breed,
  hasRabiesVaccine
) {
  // Step 1: Use the Pet model as a constructor to create a new document
  // local to the express application.
  const newPet = new Pet({
    name: name,
    photoUrl: photoUrl,
    petType: petType,
    breed: breed,
    hasRabiesVaccine: hasRabiesVaccine,
  });
  // Step 2: In order to send this new document to the database,
  // we must call the newly constructed document's `.save()` method.
  await newPet.save();
  /**
   * IMPORTANT:
   * The .save() method is NOT a method of the model.
   * It is a method of the document created when using the
   * model as a constructor. Basically, call newDocument.save(),
   * not Model.save()
   */
  return newPet;
}

export async function findAllPets() {
  const allPets = await Pet.find();
  return allPets;
}

export async function findAllPetsOfType(petType) {
  // Step 1: Call the Pet model's .find() method, and pass in
  // a parameter object that contains the property/properties
  // you wish to match to the provided values.
  const petsOfType = await Pet.find({ petType: petType });
  return petsOfType;
}

export async function updatePetWithId(id, favoriteActivities, timesRehomed) {
  const updatedPet = await Pet.findByIdAndUpdate(
    id,
    {
      name: "Leela",
      favoriteActivities: favoriteActivities,
      timesRehomed: timesRehomed,
    },
    { new: true, runValidators: true }
  );
  return updatedPet;
}
