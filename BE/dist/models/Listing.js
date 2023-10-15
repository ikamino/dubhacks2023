import mongoose, { Schema } from 'mongoose';
const ListingSchema = new Schema({
    hostId: { type: String, required: true },
    userId: { type: String },
    address: { type: String, required: true },
    startDate: { type: Date },
    endDate: { type: Date },
    pricePerHour: { type: Number, required: true },
    isAvailable: { type: Boolean, required: true },
    totalPrice: { type: Number },
    rating: { type: Number, required: true },
    description: { type: String, required: true }
});
export default mongoose.model('Listing', ListingSchema);
//# sourceMappingURL=Listing.js.map