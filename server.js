import { app } from "./app.js";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { tmp, storeImage } from "./config/multerConfing.js";
import { setupFolder } from "./helpers/checkFolders.js";

dotenv.config();

const PORT = process.env.PORT || 3000;
const uriDb = process.env.DATABASE_URL;

const connection = mongoose.connect(uriDb);

connection
  .then(() => {
    console.log("Database connection successful");
    app.listen(PORT, async () => {
      await setupFolder(tmp);
      await setupFolder(storeImage);
      console.log("Server running. Use our API on port: 3000");
    });
  })
  .catch((error) => {
    console.log(`Server not running. Error message: ${error.message}`);
    process.exit(1);
  });
