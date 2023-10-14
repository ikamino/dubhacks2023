export interface Booking {
    id: string;
    parkingSpotId: string;
    startTime: Date;
    endTime: Date;
    totalPrice: number;
}