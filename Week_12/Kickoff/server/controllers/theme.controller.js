export async function savePreferredTheme(req, res, next) {
  const { userId } = req.params;
  const { user } = req;
  const { theme } = req.body;
  try {
    if (userId !== user._id) {
      return res.status(403).json({ error: "Access denied" });
    }

    if (!["light", "dark"].includes(theme.toLowerCase())) {
      return res.status(422).json({ theme: "Invalid theme." });
    }

    user.preferredTheme = theme;
    await user.save();

    req.sendStatus(200);
  } catch (error) {
    res.sendStatus(500);
  }
}
export async function getPreferredTheme(req, res, next) {
  const { userId } = req.params;

  try {
    if (userId !== req.user._id) {
      return res.status(403).json({ error: "Access denied" });
    }

    res.json({ theme: req.user.preferredTheme });
  } catch (error) {
    res.sendStatus(500);
  }
}
