import axios from 'axios';
class HostService {
    async createListing(listing) {
        try {
            const createdListing = await axios.post('api/routes/listing', listing);
            return createdListing.data;
        }
        catch (error) {
            console.error(error);
            throw error;
        }
    }
    async deleteListing(listingId) {
        try {
            const deletedListing = await axios.delete(`api/routes/listing/${listingId}`);
            return deletedListing.data;
        }
        catch (error) {
            console.error(error);
            throw error;
        }
    }
    async getListing(listingId) {
        try {
            const listing = await axios.get(`api/routes/listing/${listingId}`);
            return listing.data;
        }
        catch (error) {
            console.error(error);
            throw error;
        }
    }
}
//# sourceMappingURL=hostService.js.map