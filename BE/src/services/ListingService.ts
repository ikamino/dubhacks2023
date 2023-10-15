import axios from "axios";
export interface ListingService {
    getListings(): Promise<Listing[]>;
    getListing(listingId: string): Promise<Listing>;
}

export class Listing implements ListingService {
    async getListings(): Promise<Listing[]> {
        try {
            const listing = await axios.get(`api/routes/listing`);
            return listing.data;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }
    async getListing(listingId: string): Promise<Listing> {
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
}