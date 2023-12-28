import { Schema, model } from "mongoose";
const { ObjectId } = Schema.Types;

const ShipSchema = new Schema(
  {
    shipName: {
      type: String,
      required: true,
      minLength: 5,
      maxLength: 50,
    },
    crewMembers: [
      {
        type: ObjectId,
        ref: "Pirate",
      },
    ],
  },
  { timestamps: true }
);

const Ship = model("Ship", ShipSchema);

export default Ship;
