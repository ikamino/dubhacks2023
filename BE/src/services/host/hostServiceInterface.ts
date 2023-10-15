import axios from 'axios';
import { Listing } from "../../models/Listing";
import { listListings } from "../../controllers/listing";

export interface HostServiceInterface {
    createListing(listing: Listing): Promise<Listing>;
    deleteListing(listingId: string): Promise<void>;
}
