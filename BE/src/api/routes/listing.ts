import {Router} from 'express';
import { listListings, createListing, deleteListing, updateListing } from '../../controllers/listing.js';

const router = Router();

router.route("/").get(listListings);

router.route("/").post(createListing);

router.route("/:id").delete(deleteListing);

router.route("/").put(updateListing);

module.exports = router;