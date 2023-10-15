import { Listing } from "../../models/Listing";
import { HostServiceInterface } from "./hostServiceInterface";
import axios from 'axios';
class HostService implements HostServiceInterface {
    async createListing(listing: Listing): Promise<Listing> {
        const createdListing = await axios.post('/listings', listing);
        return createdListing.data;
    }


    async deleteListing(listingId: string): Promise<void> {
        throw new Error("Method not implemented.");
    }
}


