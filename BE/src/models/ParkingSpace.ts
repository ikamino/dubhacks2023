interface ParkingSpace {
    id: string;
    hostId: string;
    
    address: string;
    pricePerHour: number;
    isAvailable: boolean;
    reservedBy?: string;
    rating: number;
    parkingRate: number;
}
