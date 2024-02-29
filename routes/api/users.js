import express from "express";

import authMiddleware from "../../helpers/auth.js";
import { logIn } from "../../controllers/users/logIn.js";
import { verify } from "../../controllers/users/verify.js";
import { signUp } from "../../controllers/users/signUp.js";
import { logOut } from "../../controllers/users/logOut.js";
import { current } from "../../controllers/users/current.js";
import { uploadMiddleware } from "../../config/multerConfing.js";
import { updateUserAvatar } from "../../controllers/users/updateUserAvatar.js";
import { resendVerifyEmail } from "../../controllers/users/resendVerifyEmail.js";

const router = express.Router();

router.post("/signup", signUp);

router.post("/login", logIn);

router.post("/verify", resendVerifyEmail);

router.get("/logout", authMiddleware, logOut);

router.get("/current", authMiddleware, current);

router.get("/verify/:verificationToken", verify);

router.patch(
  "/avatar",
  authMiddleware,
  uploadMiddleware.single("avatar"),
  updateUserAvatar
);

export { router };
