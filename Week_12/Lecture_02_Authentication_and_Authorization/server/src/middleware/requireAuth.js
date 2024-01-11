import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config/keys";
import { User } from "../models";

function requireAuth(req, res, next) {
  const auth = req.get("authorization");

  if (!auth) return res.status(401).json({ error: "You must be logged in" });
  const token = auth.replace("Bearer ", "");

  jwt.verify(token, JWT_SECRET, (err, payload) => {
    if (err) {
      return res.status(401).json({ error: "You must be logged in" });
    }

    const { sub, uname } = payload;
    User.findById(sub)
      .then((user) => {
        if (!user || user.username !== uname) {
          return res.status(401).json({ error: "You must be logged in" });
        }
        req.user = user;
        next();
      })
      .catch((err) => {
        return res.status(401).json({ error: "You must be logged in" });
      });
  });
}

export default requireAuth;
