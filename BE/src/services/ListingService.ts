import axios from "axios";
import { AppDataSource } from "../database";
import { Listing } from "../models/Listing";
export interface IListingService {
    getListings(): Promise<Listing[]>;
    getListing(listingId: number): Promise<Listing>;
    createListing(listing: Listing): Promise<Listing>;
}


export class ListingService implements IListingService {
    async getListings(): Promise<Listing[]> {
        try {
            const listing = await axios.get(`http://localhost:8000/api/routes/listing`);
            return listing.data;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }
    async getListing(listingId: number): Promise<Listing> {
        const listings = await this.getListings();
        if (listings) {
            for (const listing of listings) {
                if (listing.id === listingId) {
                    return listing;
                }
            }
        }
        return null;
    }
    async createListing(listing: Listing): Promise<Listing> {
        try {
            const listingPost = await axios.post(`http://localhost:8000/routes/listing`, listing);
            return listingPost.data;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }
}