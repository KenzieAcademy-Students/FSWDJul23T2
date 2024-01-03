import bcrypt from "bcryptjs";
import User from "../models/user.model";

export async function createUser(req, res, next) {
  try {
    const { username, password } = req.body;

    let user = await User.findOne({ username });

    if (user)
      return res.status(422).json({
        message: "ValidationError",
        errors: { username: "Username already in use." },
      });

    const passwordHash = await bcrypt.hash(password, 12);
    user = await User.create({ username, passwordHash });

    res.sendStatus(200);
  } catch (error) {
    next(error);
  }
}
