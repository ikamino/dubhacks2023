import { Listing } from "../../models/Listing";
import { HostServiceInterface } from "./hostServiceInterface";
import axios from 'axios';
class HostService implements HostServiceInterface {
    async createListing(listing: Listing): Promise<Listing> {
        try {
            const createdListing = await axios.post('api/routes/listing', listing);
            return createdListing.data;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }

    async deleteListing(listingId: string): Promise<void> {
        try {
            const deletedListing = await axios.delete(`api/routes/listing/${listingId}`);
            return deletedListing.data;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }

    async getListing(listingId: string): Promise<Listing> {
        try {
            const listing = await axios.get(`api/routes/listing/${listingId}`);
            return listing.data;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }
}


