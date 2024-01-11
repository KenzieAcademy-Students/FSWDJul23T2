import { Schema, model } from "mongoose";

const UserSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      minLength: 4,
      maxLength: 20,
    },
    passwordHash: {
      type: String,
      required: true,
    },
    preferredTheme: {
      type: String,
      enum: ["dark", "light"],
      default: "light",
    },
  },
  {
    timestamps: true,
    toJSON: {
      transform: function (doc, ret) {
        delete ret.__v;
        delete ret.passwordHash;
        return ret;
      },
    },
  }
);

const User = model("User", UserSchema);

export default User;
