import express from "express";
import contactsController from "../../controllers/contacts-controller.js";
import { isEmptyBody, isValidId } from "../../middlewares/index.js";
import { validateBody } from "../../decorators/index.js";
import { schemas } from "../../models/contact.js";

const router = express.Router();

router.get("/", contactsController.getAll);

router.get("/:id", isValidId, contactsController.getById);

router.post(
  "/",
  isEmptyBody,
  validateBody(schemas.contactsAddSchema),
  contactsController.add
);

router.put(
  "/:contactId",
  isValidId,
  isEmptyBody,
  validateBody(schemas.contactsAddSchema),
  contactsController.update
);

router.patch(
  "/:contactId/favorite",
  isValidId,
  isEmptyBody,
  validateBody(schemas.updateFavoriteSchema),
  contactsController.updateStatusContact
);

router.delete("/:contactId", isValidId, contactsController.deleteById);

export default router;
