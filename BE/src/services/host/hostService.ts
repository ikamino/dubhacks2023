import { Booking } from "../../models/Booking";

export interface HostService {
    createListing(listing: ParkingSpace): Promise<ParkingSpace>;
    deleteListing(listingId: string): Promise<void>;
    approveBooking(bookingId: string): Promise<Booking>;
    rejectBooking(bookingId: string): Promise<Booking>;
}

class Host implements HostService {
    async createListing(listing: ParkingSpace): Promise<ParkingSpace> {
        throw new Error("Method not implemented.");
    }
    deleteListing(listingId: string): Promise<void> {
        throw new Error("Method not implemented.");
    }
    approveBooking(bookingId: string): Promise<Booking> {
        throw new Error("Method not implemented.");
    }
    rejectBooking(bookingId: string): Promise<Booking> {
        throw new Error("Method not implemented.");
    }
}


