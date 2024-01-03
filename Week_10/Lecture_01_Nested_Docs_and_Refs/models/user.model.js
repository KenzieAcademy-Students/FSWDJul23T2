import { Schema, model } from "mongoose";
const { ObjectId } = Schema.Types;

const UserSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
    },
    passwordHash: {
      type: String,
      required: true,
    },
    favoriteFoodTrucks: [
      {
        type: ObjectId,
        ref: "Truck",
      },
    ],
    favoriteCuisineStyles: [
      {
        type: ObjectId,
        ref: "CuisineStyle",
      },
    ],
  },
  { timestamps: true }
);

const User = model("User", UserSchema);

export default User;
