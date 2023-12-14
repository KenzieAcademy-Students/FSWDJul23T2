// To define a Schema, we need to import Schema and model from "mongoose"
import { Schema, model } from "mongoose";

const EMAIL_REGEX =
  /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      match: EMAIL_REGEX,
      unique: true,
    },
    username: {
      type: String,
      required: true,
      minLength: 4,
      maxLength: 20,
    },
    passwordHash: {
      type: String,
      required: true,
    },
    /**
     * ADVANCED: We'll cover this more in a couple of weeks.
     */
    // pets: [
    //   {
    //     type: Schema.Types.ObjectId,
    //     ref: "Pet",
    //   },
    // ],
  },
  { timestamps: true }
);

const User = model("User", userSchema);

export default User;
