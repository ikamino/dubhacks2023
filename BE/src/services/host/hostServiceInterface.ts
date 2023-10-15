import { Booking } from "../../models/Booking";
import axios from 'axios';
import { Listing } from "../../models/Listing";

export interface HostServiceInterface {
    createListing(listing: Listing): Promise<Listing>;
    deleteListing(listingId: string): Promise<void>;
}
