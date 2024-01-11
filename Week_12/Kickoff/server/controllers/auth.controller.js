import bcrypt from "bcryptjs";
import User from "../models/user.model";
import jwt from "jsonwebtoken";
import { jwt_secret } from "../config/app.config";

export async function signUp(req, res) {
  try {
    const { username, password } = req.body;

    const passwordHash = await bcrypt.hash(password, 12);

    const user = await User.create({ username, passwordHash });

    const token = jwt.sign({ sub: user._id }, jwt_secret, { expiresIn: "7d" });

    res.json({ token, user });
  } catch (error) {
    res.sendStatus(500);
  }
}

export async function signIn(req, res) {
  try {
    const { user } = req;

    const token = jwt.sign({ sub: user._id }, jwt_secret, { expiresIn: "7d" });
    res.json({ token, user });
  } catch (error) {}
}
