import { Booking } from "../../models/Booking";
import { Listing } from "../../models/Listing";
import { UserServiceInterface } from "./userServiceInterface";
import axios from "axios";

export class UserService implements UserServiceInterface {
    // we just get all listings: 
    async getBooking(bookingId: string, userId: string): Promise<Booking> {
        const response = await axios.get('/api/routes/listing');
        const data = JSON.parse(response.data);
        const booking = data => 
            data.forEach(element => {
                if (element.id === bookingId) {
                    return element;
                }
            });
        return booking(data);
    }

    async bookListing(listingId: string, startTime: Date, endTime: Date, userId): Promise<Booking> {
        const booking = await axios.post('/api/routes/listing', {
            id: listingId,
            reservedBy: userId,
            listingId: listingId,
            startTime: startTime,
            endTime: endTime
        });
        return booking.data;
    }
}

function populateBookings(data: Listing[], userId: string): Booking[] {
    let listingMatches: Listing[] = [];
    data.forEach(element => {
        if (element.userId === userId) {
            listingMatches.push(element);
        }
    }); 

    return listingMatches.map(booking => {
        const newBooking: Booking = {
            id: booking.id,
            reservedBy: booking.reservedBy, 
            startDate: booking.startDate,
            endDate: booking.endDate,
            totalPrice: booking.totalPrice
        };
        return newBooking;
    });
}