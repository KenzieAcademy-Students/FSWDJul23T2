import User from "../models/user.model";
import bcrypt from "bcryptjs";

export async function validateSignup(req, res, next) {
  try {
    const { username, password, confirmPassword } = req.body;
    const errors = {};

    if (!username) {
      errors.username = "Username is required.";
    } else if (username.length < 4) {
      errors.username = "Username must be at least 4 characters.";
    } else if (username.length > 20) {
      errors.username = "Username cannot be more than 20 characters.";
    } else {
      const user = await User.findOne({ username });

      if (user) {
        errors.username = "Username already in use.";
      }
    }

    if (!password) {
      errors.password = "Password is required.";
    } else if (password.length < 8) {
      errors.password = "Password must be at least 8 characters.";
    } else if (password.length > 30) {
      errors.password = "Password cannot be longer than 30 characters.";
    } else if (password !== confirmPassword) {
      errors.password = "Passwords do not match.";
    }

    if (Object.keys(errors).length > 0) {
      return res.status(422).json({ errors });
    } else {
      next();
    }
  } catch (error) {
    return res.sendStatus(500);
  }
}

export async function validateSignin(req, res, next) {
  try {
    const { username, password } = req.body;
    const errors = {};
    let user;
    if (!username) {
      errors.username = "Username is required.";
    } else {
      user = await User.findOne({ username });
      if (!user) errors.username = "Invalid username and/or password.";
    }

    if (!password) {
      errors.password = "Password is required.";
    } else if (user && !bcrypt.compareSync(password, user.passwordHash)) {
      errors.username = "Invalid username and/or password.";
    }

    if (Object.keys(errors).length > 0) {
      return res.status(422).json({ errors });
    } else {
      req.user = user;
      next();
    }
  } catch (error) {
    return res.sendStatus(500);
  }
}
