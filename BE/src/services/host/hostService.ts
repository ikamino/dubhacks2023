import { Listing } from "../../models/Listing.js";
import { HostServiceInterface } from "./hostServiceInterface.js";

import axios from 'axios';
export class HostService implements HostServiceInterface {
    async createListing(listing: Listing): Promise<Listing> {
        try {
            const createdListing = await axios.post('http://localhost:8000/api/routes/listing', listing);
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

    async getListings(): Promise<Listing> {
        try {
            const listing = await axios.get(`api/routes/listing`);
            return listing.data;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }
}


