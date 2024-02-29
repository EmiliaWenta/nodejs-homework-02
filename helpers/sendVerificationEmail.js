import { DOMAIN, client } from "../config/mailgunConfig.js";

export function sendVerificationEmail(email, verificationToken) {
  const messageData = {
    from: "emiliakielinska96@gmail.com",
    to: email,
    subject: "Email verification link",
    text: `Hello! Your email verification link: /users/verify/${verificationToken}`,
  };

  try {
    client.messages
      .create(DOMAIN, messageData)
      .then((res) => {
        console.log("Email verification send to client");
      })
      .catch((err) => {
        console.log(err);
      });
  } catch (err) {
    res.status(500).json(`Error message: ${error}`);
  }
}
