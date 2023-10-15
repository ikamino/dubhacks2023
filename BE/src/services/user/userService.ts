import { Listing } from "../../models/Listing";
import { UserServiceInterface } from "./userServiceInterface";
import axios from "axios";

export class UserService implements UserServiceInterface {
    // we just get all listings: 
    async getBooking(userId: string): Promise<Listing> {
        try {
            const response = await axios.get('/api/routes/listing');
            const data = JSON.parse(response.data);
            const booking = data => 
                data.forEach(element => {
                    if (element.userId === userId) {
                        return element;
                    }
                });
            return booking(data);
        } catch (error) {
            console.error(error);
            throw new Error('Failed to get booking');
        }
    }
    async bookListing(listingId: string, startTime: Date, endTime: Date, userId: string): Promise<Listing> {
        // update listing so that isAvailable is false
        const response = await axios.get('/api/routes/listing');
        const data = JSON.parse(response.data);
        const listing = (data, listingId) => {
            const foundListing: Listing | undefined = data.find((element) => element.id === listingId);
            return foundListing;
          };
        if (listing(data, listingId) === undefined) {
            throw new Error('Listing not found');
        }
        const update = await axios.put('/api/routes/listing', {
            id: listingId,
            isAvailable: false
        });

        return update.data;
    }

}


function populateBookings(data: Listing[], userId: string): Listing[] {
    let listingMatches: Listing[] = [];
    data.forEach(element => {
        if (element.userId === userId) {
            listingMatches.push(element);
        }
    }); 

    return listingMatches;
}
