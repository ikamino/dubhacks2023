import mongoose, { Schema, Document } from 'mongoose';

export interface Listing extends Document {
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

const ListingSchema: Schema = new Schema({
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

export default mongoose.model<Listing>('Listing', ListingSchema);
