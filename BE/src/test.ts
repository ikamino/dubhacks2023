import Listing from "./models/Listing.js";
export const mockListing = new Listing({
    hostId: 'your-host-id',
    userId: 'your-user-id',
    address: '123 Main Street',
    startDate: new Date('2023-01-01'),
    endDate: new Date('2023-01-10'),
    pricePerHour: 50,
    isAvailable: true,
    totalPrice: 500,
    rating: 4.5,
    description: 'A lovely place to stay!',
  });