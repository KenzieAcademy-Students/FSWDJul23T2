import { User } from "../models";

async function create(username, passwordHash) {
  return User.create({ username: username.toLowerCase(), passwordHash });
}

async function findByUsername(username) {
  return User.findOne({ username: username.toLowerCase() });
}

async function update(username, userData) {
  return User.findOneAndUpdate(
    { username: username.toLowerCase() },
    { ...userData },
    { new: true, runValidators: true }
  );
}

export default {
  create,
  findByUsername,
  update,
};
