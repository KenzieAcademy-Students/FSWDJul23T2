import userServices from "../services/user.services";
import bcrypt from "bcryptjs";

async function getUserData(req, res) {
  const { username } = req.params;

  try {
    let user = await userServices.findByUsername(username);
    if (!user) {
      return res.status(401).json({ error: "User not found" });
    }

    user = user.toJSON();
    delete user.passwordHash;

    res.json(user);
  } catch (error) {
    res.sendStatus(500);
  }
}

async function updateUser(req, res) {
  const { username } = req.params;
  const { password, confirmPassword, ...userData } = req.body;
  const user = req.user;

  if (username.toLowerCase() !== user.username.toLowerCase()) {
    return res.status(403).json({ error: "Forbidden" });
  }
  try {
    if (password) {
      if (!confirmPassword) {
        return res.status(422).json({ error: "Confirm password" });
      } else if (password.length < 8 || password.length > 20) {
        return res
          .status(422)
          .json({ error: "New password must be between 8 and 20 characters" });
      } else if (password !== confirmPassword) {
        return res.status(422).json({ error: "Passwords must match" });
      }

      const passwordHash = bcrypt.hashSync(password, 12);

      let updatedUser = await userServices.update(username, { passwordHash });
      updatedUser = updatedUser.toJSON();
      delete updatedUser.passwordHash;

      res.json(updatedUser);
    } else {
      let updatedUser = await userServices.update(username, userData);
      updatedUser = updatedUser.toJSON();
      delete updatedUser.passwordHash;

      res.json(updatedUser);
    }
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}

export default {
  getUserData,
  updateUser,
};
