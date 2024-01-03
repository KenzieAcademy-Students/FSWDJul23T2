import { Schema, model } from "mongoose";

const PirateSchema = new Schema({
  name: {
    type: String,
    required: [true, "Name is required."],
    minLength: [2, "Name must contain between 2 and 25 characters."],
    maxLength: [25, "Name must contain between 2 and 25 characters."],
  },
  nickName: {
    type: String,
    default: "N/A",
  },
  rank: {
    type: String,
    required: [true, "Rank is required."],
    enum: {
      values: ["Captain", "First Mate", "Deck Hand", "Yarr"],
      message:
        "Rank must be one of the available selections: Captain, First Mate, Deck Hand, or Yarr.",
    },
  },
  parrots: [
    {
      name: {
        type: String,
        required: true,
        minLength: 2,
      },
      plumage: {
        type: String,
        enum: ["red", "blue", "yellow", "grey"],
      },
      rememberedPhrases: [String],
    },
  ],
  photoUrl: {
    type: String,
    required: false,
    default: "/images/default.jpg",
  },
  hasPegLeg: {
    type: Boolean,
    default: false,
  },
  catchPhrase: {
    type: String,
    default: "N/A",
    match: [/^[^0-9]+$/, "Catch phrase cannot contain numbers."],
  },
});

const Pirate = model("Pirate", PirateSchema);

export default Pirate;
