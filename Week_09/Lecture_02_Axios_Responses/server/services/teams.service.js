import Team from "../models/team.model";

export async function createTeam(
  teamName,
  location,
  abbreviation,
  superBowlAppearances,
  isActive,
  yearEstablished
) {
  /**
   * Option 1: Use the model as a constructor.
   */
  const newTeam = new Team({
    teamName: teamName,
    location: location,
    abbreviation: abbreviation,
    superBowlAppearances: superBowlAppearances,
    isActive: isActive,
    yearEstablished: yearEstablished,
  });
  // Once the document is created using the constructor,
  // call the .save() method from the document.
  await newTeam.save();
  return newTeam;
}
