import jwt from "jsonwebtoken";
import User from "../models/user.model";

async function requireAuth(req, res, next) {
  const authorization = req.get("Authorization");
  if (!authorization) {
    return res.status(401).json({ error: "You must be logged in" });
  }
  const token = authorization.replace("Bearer ", "");
  jwt.verify(token, jwt_secret, (err, payload) => {
    if (err) {
      return res.status(401).json({ error: "You must be logged in" });
    }
    const { sub } = payload;
    User.findById(sub).then((userdata) => {
      req.user = userdata;
      next();
    });
  });
}

export default requireAuth;
