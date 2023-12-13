// To define a Schema, we need to import Schema and model from "mongoose"
import { Schema, model } from "mongoose";

const EMAIL_REGEX =
  /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

/**
 * Declare a new schema
 *
 * The constructor should receive minimum one argument (with an optional second):
 * - An object defining the shape of a single user document
 * - (optional) an object with some configuration options
 */
const userSchema = new Schema(
  {
    // Each property's value should be an object that
    // defines what rules must be followed
    email: {
      type: String, // This ensures that the email must be a string
      required: true, // This means that a user cannot be created if they do not provide an email address
      match: EMAIL_REGEX, // This means that a user cannot be created if the email field is not a valid email address syntax
      unique: true, // While not actually a validation, this means only a single user can be created with a given email address
      // Additionally, this actually sets the email field as an index, which leads
      // to faster querying
    },
    username: {
      type: String,
      required: true, // Again, this means a user cannot be created if they do not provide a username
      minLength: 4, // This means a user cannot be created if the username contains fewer than 4 characters
      maxLength: 20, // This means a user cannot be created if the username contains more than 20 characters
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
  { timestamps: true } // This will ensure that upon creation, every user document
  // will have a timestamp for created_at and updated_at, and whenever the document
  // is updated, the updated_at field will be updated
);

/**
 * In order to map our schema to a specific collection, we must
 * use the model function that was imported alongside Schema.
 * The model function accepts two arguments:
 * - A string - the name we wish to give the collection
 *      > NOTE: If you use a singular noun, mongoose will convert it
 *        to the plural version of the noun, and set it to lowercase
 * - A schema - the schema we wish to map to the collection
 */
const User = model("User", userSchema);

// Finally, to make this model accessible throughout our server,
// set it as the default export
export default User;
