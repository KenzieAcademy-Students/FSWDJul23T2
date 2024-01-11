import { Schema, model } from "mongoose";

const ShipSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    imageUrl: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Ship = model("Ship", ShipSchema);

export default Ship;
