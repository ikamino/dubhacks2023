import axios from 'axios';
import { Listing } from "../../models/Listing.js";
import { listListings } from "../../controllers/listing.js";

export interface HostServiceInterface {
    createListing(listing: Listing): Promise<Listing>;
    deleteListing(listingId: string): Promise<void>;
}
