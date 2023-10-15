import { Booking } from "../../models/Booking";

export interface UserServiceInterface {
    getBooking(bookingId: string, userId: string): Promise<Booking>;
    bookListing(listingId: string, startTime: Date, endTime: Date): Promise<Booking>;
}