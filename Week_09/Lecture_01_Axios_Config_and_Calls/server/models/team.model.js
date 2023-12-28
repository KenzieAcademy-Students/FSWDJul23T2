/**
 * To define the "shape of the hole" in our little peg
 * analogy, we must first import the Schema class from
 * mongoose.
 *
 * Then, when we must convert the Schema to a model, we'll
 * also need the model method from mongoose
 */
import { Schema, model } from "mongoose";

/**
 * Then, we'll declare a variable for the schema, and assign
 * the value returned by the Schema class constructor to said
 * variable.
 */
const TeamSchema = new Schema({
  teamName: {
    type: String,
    required: [true, "Every team needs a name."],
    minLength: [3, "Team name must be at least 3 characters."],
    maxLength: [25, "Your team name cannot be longer than 25 characters."],
  },
  location: {
    type: String,
    required: [true, "A location is required."],
    minLength: [4, "Location name must be at least 4 characters."],
    maxLength: [25, "Location name cannot be longer than 25 characters."],
  },
  abbreviation: {
    type: String,
    required: [true, "You must provide an abbreviation."],
    minLength: 2,
    maxLength: 3,
  },
  superBowlAppearances: [
    {
      type: Number,
      required: false,
      min: [
        1967,
        "The first Super Bowl was in 1967. Therefore, your Super Bowl appearance cannot be before 1967.",
      ],
      max: [
        new Date().getFullYear(),
        "You can't predict the future, and despite popular opinion these days, the NFL is not scripted. Pick a year that is not in the future.",
      ],
    },
  ],
  isActive: {
    type: Boolean,
    default: true, // this does not mean "is there a default value", it means "what should the default value be if no value is provided"
  },
  yearEstablished: {
    type: Number,
    required: [
      true,
      "You must provide the year the team was established in its current form.",
    ],
    min: [
      1920,
      "The NFL was not established until 1920. Therefore, your team could not have been established before 1920.",
    ],
  },
});

/**
 * After defining the Schema, let's convert it to a model.
 * The model will contain all of the query methods that we'll
 * need to actually modify and access this collection itself.
 *
 * Assign the results of the model() method to the variable.
 * The first argument passed into model() should be a string
 * denoting the name we wish to give the collection. Any singular
 * word will be pluralized automatically by mongoose itself.
 * Standard practice? Use the same name as your variable.
 *
 * The second argument is the schema that should be applied
 * to this collection.
 */
const Team = model("Team", TeamSchema);

/**
 * Finally, we're going to need to use this model in our routes
 * so our API actually incorporates the database. Therefore,
 * export the model as the default export of this file.
 */
export default Team;
