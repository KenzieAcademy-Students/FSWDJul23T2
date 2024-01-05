import { Router } from "express";
import fileUpload from "express-fileupload";
import path from "path";
import { randomUUID } from "crypto";

const filesRoutes = Router();

filesRoutes.route("/avatar").post(fileUpload(), async (req, res) => {
  if (!req.files || !Object.keys(req.files).length === 0) {
    return res.status(422).json({ error: "no files uploaded" });
  }

  const avatar = req.files.profileImage;
  const avatarSplit = avatar.name.split(".");
  const avatarExtension = avatarSplit[avatarSplit.length - 1];
  const newFileName = randomUUID().split("-").join("") + "." + avatarExtension;
  const uploadPath = path.join(__dirname, "../public/avatars/") + newFileName;

  avatar.mv(uploadPath, (err) => {
    if (err) {
      return res.status(500).json({ error: "server failed to save image" });
    }

    return res.status(200).json({ path: `/avatars/${newFileName}` });
  });
});

export default filesRoutes;
