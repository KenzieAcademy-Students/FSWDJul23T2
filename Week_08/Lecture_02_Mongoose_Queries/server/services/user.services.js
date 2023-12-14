import User from "../models/user.models";

export async function insertUserDocument(email, username, passwordHash) {
  // Step 1: Call the User model's .create() method, and pass in
  // an object that matches the schema's shape.
  const newUser = await User.create({
    email: email,
    username: username,
    passwordHash: passwordHash,
  });
  return newUser;
}
