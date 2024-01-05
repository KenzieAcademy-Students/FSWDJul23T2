import express from "express";
import bcrypt from "bcryptjs";
import { User } from "../models";
import { requireAuth } from "../middleware";

const router = express.Router();

router
  .route("/:username")
  .get(async (req, res) => {
    const { username } = req.params;

    const populateQuery = {
      path: "posts",
      populate: { path: "author", select: ["username", "profile_image"] },
    };

    const user = await User.findOne({ username }).populate(populateQuery);

    if (!user) return res.sendStatus(404);

    res.json(user);
  })
  .put(requireAuth, async (req, res) => {
    const { username } = req.params;

    if (!req.user.username.toLowerCase() === username.toLowerCase()) {
      return res.status(401).json({ error: "unauthorized" });
    }

    const { current_password, new_password, confirm_new_password } = req.body;
    if (!current_password || !new_password || !confirm_new_password) {
      return res.status(422).json({ error: "all password fields required" });
    }

    const user = await User.findOne({ username });
    const passwordCorrect =
      user === null
        ? false
        : await bcrypt.compare(current_password, user.passwordHash);

    if (!passwordCorrect) {
      return res.status(422).json({ error: "invalid password" });
    }

    if (new_password !== confirm_new_password) {
      return res.status(422).json({ error: "passwords must match" });
    } else if (new_password.length < 8 || new_password.length > 20) {
      return res
        .status(422)
        .json({ error: "password must be between 8 and 20 characters" });
    }

    const hashedPassword = await bcrypt.hash(new_password, 12);
    user.passwordHash = hashedPassword;
    await user.save();

    try {
      res.json(user.toJSON());
    } catch (error) {
      res.status(404).end();
    }
  });

router.route("/:username/avatar").put(requireAuth, async (req, res) => {
  const { username } = req.params;
  const { profile_image } = req.body;

  if (!req.user.username.toLowerCase() === username.toLowerCase()) {
    return res.status(401).json({ error: "unauthorized" });
  }

  const user = await User.findOne({ username });

  if (!user) {
    return res.status(404).json({ error: "user not found" });
  }

  user.profile_image = profile_image;
  await user.save();
  res.json(user.toJSON());
});

module.exports = router;
