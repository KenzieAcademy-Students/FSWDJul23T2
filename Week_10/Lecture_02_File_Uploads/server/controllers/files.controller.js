import path from "path";

export async function handleUploadFile(req, res) {
  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).json({ error: "No files uploaded" });
  }

  const { avatar } = req.files;

  // Take the file from the request, and quite simply,
  // move it to the static directory.

  // Declare the full upload path:
  const uploadPath = path.join(__dirname, "../public/images/") + avatar.name;

  // Take the avatar from req.files, and move it through the use of
  // the `.mv()` method
  avatar.mv(uploadPath, function (err) {
    if (err) {
      return res.sendStatus(500);
    }

    res.json({ path: `/images/${avatar.name}` });
  });
}
