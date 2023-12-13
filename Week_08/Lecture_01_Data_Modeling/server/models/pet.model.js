import { Schema, model } from "mongoose";

const petSchema = new Schema(
  {
    name: {
      type: String,
      // By using an array with 2 values in it, we can set custom validation
      //error messages. The first element of the array is the schema value,
      //the second is the error message.
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
      enum: [
        ["dog", "cat", "reptile", "bird"], // This means that a pet will not be created if the petType is anything other than "dog", "cat", "reptile", or "bird".
        "You can only use this app with pets that are dogs, cats, reptiles, or birds.",
      ],
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
      /**
       * Below is an example of a custom validation. If the pet
       * is a dog or a cat, they must be vaccinated against rabies.
       * However, birds and reptiles cannot have or carry rabies, so
       * the value here does not matter for them.
       *
       * If an invalid value is used (i.e. a dog with no rabies vaccine),
       * the message will indicate that dogs and cats must be vaccinated against
       * rabies.
       */
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
    favoriteActivities: [String], // This means that the favoriteActivities in a pet document is an array of strings only.
    timesRehomed: {
      type: Number,
      default: 0, // If a pet is being created and the object does not include
      // a timesRehomed value, then the value will default to 0 upon creation.
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
