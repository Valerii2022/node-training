import express from "express";
import contactsController from "../../controllers/contacts-controller.js";
import { isEmptyBody } from "../../middlewares/index.js";
import { validateBody } from "../../decorators/index.js";
import { schemas } from "../../models/contact.js";

const router = express.Router();

router.get("/", contactsController.getAll);

router.get("/:id", contactsController.getById);

router.post(
  "/",
  isEmptyBody,
  validateBody(schemas.contactsAddSchema),
  contactsController.add
);

router.put(
  "/:contactId",
  isEmptyBody,
  validateBody(schemas.contactsAddSchema),
  contactsController.update
);

router.patch(
  "/:contactId/favorite",
  isEmptyBody,
  validateBody(schemas.updateFavoriteSchema),
  contactsController.updateFavorite
);

router.delete("/:contactId", contactsController.deleteById);

export default router;
