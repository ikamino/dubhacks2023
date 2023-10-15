import { Booking } from "../../models/Booking";

export interface UserService {
    getBooking(bookingId: string): Promise<Booking>;
    bookListing(listingId: string, startTime: Date, endTime: Date): Promise<Booking>;
}