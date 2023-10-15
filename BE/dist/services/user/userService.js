import axios from "axios";
export class UserService {
    // we just get all listings: 
    async getBooking(userId) {
        try {
            const response = await axios.get('/api/routes/listing');
            const data = JSON.parse(response.data);
            const booking = data => data.forEach(element => {
                if (element.userId === userId) {
                    return element;
                }
            });
            return booking(data);
        }
        catch (error) {
            console.error(error);
            throw new Error('Failed to get booking');
        }
    }
    async bookListing(listingId, startTime, endTime, userId) {
        // update listing so that isAvailable is false
        const response = await axios.get('/api/routes/listing');
        const data = JSON.parse(response.data);
        const listing = (data, listingId) => {
            const foundListing = data.find((element) => element.id === listingId);
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
function populateBookings(data, userId) {
    let listingMatches = [];
    data.forEach(element => {
        if (element.userId === userId) {
            listingMatches.push(element);
        }
    });
    return listingMatches;
}
//# sourceMappingURL=userService.js.map