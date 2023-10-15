import { displayListing, deleteListing, createListing, updateListing } from "../controllers/listing";
import { Router } from "express";

const router = Router();

router.route("/").get(displayListing);

router.route("/:companyID").delete(deleteListing);

router.route("/").post(createListing);

router.route("/:companyID").put(updateListing);

module.exports = router;