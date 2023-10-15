export interface Listing {
    id: string;
    hostId: string;
    userId?: string;
    address: string;
    startDate?: Date;
    endDate?: Date;
    pricePerHour: number;
    isAvailable: boolean;
    totalPrice?: number
    rating: number;
    description: string; 
}
