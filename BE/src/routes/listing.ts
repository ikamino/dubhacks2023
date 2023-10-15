// import { displayListing, deleteListing, createListing, updateListing } from "../controllers/listing";
import { Router } from "express";
import { displayListing, createListing, updateListing } from "../controllers/listing";


const router = Router();

router.route("/").get(displayListing);

// router.route("/:listingID").delete(deleteListing);

router.route("/").post(createListing);

router.route("/").put(updateListing);

module.exports = router;