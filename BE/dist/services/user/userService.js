"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const axios_1 = __importDefault(require("axios"));
class UserService {
    // we just get all listings: 
    getBooking(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield axios_1.default.get('/api/routes/listing');
                const data = JSON.parse(response.data);
                const booking = data => data.forEach(element => {
                    if (element.userId === userId) {
                        return element;
                    }
                });
                return booking(data);
            }
            catch (error) {
                console.error(error);
                throw new Error('Failed to get booking');
            }
        });
    }
    bookListing(listingId, startTime, endTime, userId) {
        return __awaiter(this, void 0, void 0, function* () {
            // update listing so that isAvailable is false
            const response = yield axios_1.default.get('/api/routes/listing');
            const data = JSON.parse(response.data);
            const listing = (data, listingId) => {
                const foundListing = data.find((element) => element.id === listingId);
                return foundListing;
            };
            if (listing(data, listingId) === undefined) {
                throw new Error('Listing not found');
            }
            const update = yield axios_1.default.put('/api/routes/listing', {
                id: listingId,
                isAvailable: false
            });
            return update.data;
        });
    }
}
exports.UserService = UserService;
function populateBookings(data, userId) {
    let listingMatches = [];
    data.forEach(element => {
        if (element.userId === userId) {
            listingMatches.push(element);
        }
    });
    return listingMatches;
}
