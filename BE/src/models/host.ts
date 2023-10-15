import { Listing } from "./Listing.js";

// Class for a parking space host that can host their own parking space to users.
export interface Host {
    id: number; 
    userName: string;
    hostedParkingSpaces: Listing[];
}