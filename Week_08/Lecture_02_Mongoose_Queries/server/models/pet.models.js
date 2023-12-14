import { Schema, model } from "mongoose";

const petSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "To create a pet, you must provide a name."],
      minLength: [2, "A pet's name must contain more than 1 character."],
      maxLength: [35, "A pet's name cannot be longer than 35 characters."],
    },
    photoUrl: {
      type: String,
      required: [true, "You must provide a photo of your pet."],
    },
    petType: {
      type: String,
      required: [true, "You must provide a pet type."],
      enum: ["dog", "cat", "reptile", "bird"],
    },
    breed: {
      type: String,
      required: [
        true,
        "For legal reasons, you must provide the breed of your pet.",
      ],
    },
    hasRabiesVaccine: {
      type: Boolean,
      required: true,
      validate: {
        validator: function (value) {
          if (["dog", "cat"].includes(this.petType)) {
            return value === true;
          } else return true;
        },
        message: (props) =>
          "Dogs and cats must be vaccinated against rabies to use this app.",
      },
    },
    favoriteActivities: [String],
    timesRehomed: {
      type: Number,
      default: 0,
      min: [0, "You can't rehome a pet a negative number of times"],
      max: [
        2,
        "Unfortunately, pets rehomed more than twice cannot use this application due to increased risk of violent behavior.",
      ],
    },
    /**
     * ADVANCED: We'll cover this more in a couple of weeks.
     */
    // owner: {
    //   type: Schema.Types.ObjectId, // The owner is an ObjectId
    //   required: true,
    //   ref: "User", // The ref value indicates which collection the ObjectId belongs to.
    //   // This must match the string passed into said collection's model function
    // },
  },
  { timestamps: true }
);

const Pet = model("Pet", petSchema);

export default Pet;
