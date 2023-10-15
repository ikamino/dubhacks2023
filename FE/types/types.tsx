export type ParkingSpace = {
    id: string, 
    title: string,
    imagein: string,
    hostId: string, 
    address: string,
    pricePerHour: number,
    isAvailable: boolean,
    reservedBy?: string,
    rating: number,
    parkingRate: number,
    description: string
}

export type User = {
    id: string,
    name: string,
    // for now bookigns auto approve.
    // bookings: Booking[],
}