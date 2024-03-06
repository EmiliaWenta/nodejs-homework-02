import express from "express";

import { showContacts } from "../../controllers/contacts/showContacts.js";
import { updateStatus } from "../../controllers/contacts/updateStatus.js";
import { deleteContact } from "../../controllers/contacts/deleteContact.js";
import { showContactById } from "../../controllers/contacts/showContactById.js";
import { createNewContact } from "../../controllers/contacts/createNewContact.js";
import { updateExistContact } from "../../controllers/contacts/updateExistContact.js";

const router = express.Router();

router.get("/", showContacts);

router.get("/:contactId", showContactById);

router.post("/", createNewContact);

router.delete("/:contactId", deleteContact);

router.put("/:contactId", updateExistContact);

router.patch("/:contactId/favourite", updateStatus);

export { router };
