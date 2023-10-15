import { Booking } from "../../models/Booking";
import axios from 'axios';

export interface HostService {
    createListing(listing: ParkingSpace): Promise<ParkingSpace>;
    deleteListing(listingId: string): Promise<void>;
}

class Host implements HostService {
    async createListing(listing: ParkingSpace): Promise<ParkingSpace> {
        const createdListing = await axios.post('/listings', listing);
        return createdListing.data;
    }
    async deleteListing(listingId: string): Promise<void> {
        throw new Error("Method not implemented.");
    }
}


