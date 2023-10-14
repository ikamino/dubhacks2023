export interface ListingService {
    getListing(listingId: string): Promise<ParkingSpace>;
    getRating(listingId: string): Promise<Number>;
}
