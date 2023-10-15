export interface ListingService {
    getListing(listingId: string): Promise<Listing>;
    getRating(listingId: string): Promise<Number>;

}


class Listing implements ListingService {
    async getListing(listingId: string): Promise<Listing> {
        throw new Error("Method not implemented.");
    }
    async getRating(listingId: string): Promise<Number> {
        throw new Error("Method not implemented.");
    }
}