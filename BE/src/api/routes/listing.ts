import {Router} from 'express';
import { listListings, createListing, deleteListing } from '../../controllers/listing';

const router = Router();

router.route("/").get(listListings);

router.route("/").post(createListing);

router.route("/:id").delete(deleteListing);

module.exports = router;