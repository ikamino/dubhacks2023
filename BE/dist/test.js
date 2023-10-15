"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mockListing = void 0;
const Listing_js_1 = __importDefault(require("./models/Listing.js"));
exports.mockListing = new Listing_js_1.default({
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
