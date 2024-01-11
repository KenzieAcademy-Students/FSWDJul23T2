import userServices from "../services/user.services";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config/keys";

/**
 * The signup route handler function should simply validate
 * the incoming data, and then create a new user in the database
 * assuming the validation was successful.
 * @param {*} req
 * @param {*} res
 * @returns
 */
async function signUp(req, res) {
  const { username, password, confirmPassword } = req.body;

  if (!username || !password || !confirmPassword) {
    return res.status(422).json({ error: "All fields required" });
  } else if (username.length < 4 || username.length > 25) {
    return res
      .status(422)
      .json({ error: "Username must be between 4 and 25 characters" });
  } else if (password.length < 8 || password.length > 20) {
    return res
      .status(422)
      .json({ error: "Password must be between 8 and 20 characters" });
  } else if (password !== confirmPassword) {
    return res.status(422).json({ error: "Passwords must match" });
  }

  try {
    let user = await userServices.findByUsername(username);
    if (user !== null) {
      return res.status(422).json({ error: "Username already in use" });
    }

    const passwordHash = bcrypt.hashSync(password, 12);

    user = await userServices.create(username, passwordHash);

    res.sendStatus(201);
  } catch (error) {
    res.sendStatus(500);
  }
}

/**
 * The signin route handler should first confirm that a user
 * exists with the given username. Then, assuming the user
 * exists, confirm the password provided, when encrypted,
 * matches what is set as that user's passwordHash.
 *
 * Once the identity has been confirmed, we will need to create
 * a token that will be used to provide access to protected
 * resources. This is that spillover from authentication
 * into authorization
 * @param {*} req
 * @param {*} res
 */
async function signIn(req, res) {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(422).json({ error: "All fields required" });
  }

  try {
    let user = await userServices.findByUsername(username);
    if (!user) {
      return res
        .status(422)
        .json({ error: "Invalid username and/or password" });
    }

    const passwordIsCorrect = bcrypt.compareSync(password, user.passwordHash);
    if (!passwordIsCorrect) {
      return res
        .status(422)
        .json({ error: "Invalid username and/or password" });
    }

    /**
     * By now, the user has confirmed their identity. To prevent this
     * process from being needed every single time a request is made
     * for a protected resource, we should create and return a token
     * that acts as a proof of authentication that can be used to
     * access resources. This token is called an access token, and
     * will come in the form of a JSON web token (JWT).
     *
     * Let's create the token payload
     */
    const tokenPayload = {
      sub: user._id,
      uname: user.username,
    };

    const accessToken = jwt.sign(tokenPayload, JWT_SECRET, { expiresIn: "7d" });

    user = user.toJSON();
    delete user.passwordHash;

    res.json({
      token: accessToken,
      user,
    });
  } catch (error) {
    res.sendStatus(500);
  }
}

export default {
  signUp,
  signIn,
};
