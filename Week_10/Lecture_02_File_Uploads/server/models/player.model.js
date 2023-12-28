import { Schema, model } from "mongoose";

const playerSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    jerseyNum: {
      type: Number,
      required: true,
      min: 0,
      max: 99,
    },
    position: {
      type: String,
      required: true,
      enum: ["RW", "C", "LW", "D", "G"],
    },
    imageUrl: {
      type: String,
      default: "/images/default.png",
    },
  },
  { timestamps: true }
);

const Player = model("Player", playerSchema);

export default Player;
