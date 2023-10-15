import { Listing } from "../../models/Listing";

export interface UserServiceInterface {
    getBooking(bookingId: string, userId: string): Promise<Listing>;
    bookListing(listingId: string, startTime: Date, endTime: Date, userId: string): Promise<Listing>;
}