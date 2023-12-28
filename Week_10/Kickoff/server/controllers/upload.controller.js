export const uploadFile = async (req, res) => {
  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).json({ error: "No files uploaded." });
  }

  const postImage = req.files.postImage;
  const uploadPath = path.join(__dirname, "../public/images", postImage.name);
  postImage.mv(uploadPath, function (err) {
    if (err) {
      return res.sendStatus(500);
    }

    res.json({ path: "/images/" + postImage.name });
  });
};
