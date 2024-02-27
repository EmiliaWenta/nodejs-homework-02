import path from "path";
import fs from "fs/promises";
import { v4 as uuidv4 } from "uuid";
import { storeImage } from "../../config/multerConfing.js";

import { isImageAndTransform } from "../../helpers/isImageAndTransform.js";
import { updateUserAvatarURL } from "../../service/index.js";

export async function updateUserAvatar(req, res, next) {
  if (!req.file) {
    return res.status(400).json({ message: "File isn't a photo" });
  }

  const { path: temporaryPath } = req.file;
  const extension = path.extname(temporaryPath);
  const fileName = `${uuidv4()}${extension}`;
  const filePath = path.join(storeImage, fileName);

  try {
    await fs.rename(temporaryPath, filePath);
  } catch (e) {
    console.log(e);
    await fs.unlink(temporaryPath);
    return next(e);
  }

  const isValidAndTransform = await isImageAndTransform(filePath);
  console.log(isValidAndTransform);
  if (!isValidAndTransform) {
    await fs.unlink(filePath);
    return res
      .status(400)
      .json({ message: "File isn't a photo but is pretending " });
  }

  const id = res.user._id;
  await updateUserAvatarURL(id, fileName);

  res.status(200).json({
    message: `File load successfuly. Press to see your new beautiful avatar: /${fileName}`,
  });
}
