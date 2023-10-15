export interface ListingService {
    getListing(listingId: string): Promise<ParkingSpace>;
    getRating(listingId: string): Promise<Number>;
    
}


class Listing implements ListingService {
    async getListing(listingId: string): Promise<ParkingSpace> {
        throw new Error("Method not implemented.");
    }
    async getRating(listingId: string): Promise<Number> {
        throw new Error("Method not implemented.");
    }
}