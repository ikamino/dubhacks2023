import { Listing } from './Listing'; // Import the Listing interface from the appropriate module

export interface Booking extends
 Pick<Listing, "id" | "startDate" | "endDate" | "totalPrice" | "userId"> {
    id: string;
    userId: string;
    startDate: Date;
    endDate: Date;
    totalPrice: number;
}
