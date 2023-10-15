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
exports.HostService = void 0;
const axios_1 = __importDefault(require("axios"));
class HostService {
    createListing(listing) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const createdListing = yield axios_1.default.post('api/routes/listing', listing);
                return createdListing.data;
            }
            catch (error) {
                console.error(error);
                throw error;
            }
        });
    }
    deleteListing(listingId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const deletedListing = yield axios_1.default.delete(`api/routes/listing/${listingId}`);
                return deletedListing.data;
            }
            catch (error) {
                console.error(error);
                throw error;
            }
        });
    }
    getListing(listingId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const listing = yield axios_1.default.get(`api/routes/listing/${listingId}`);
                return listing.data;
            }
            catch (error) {
                console.error(error);
                throw error;
            }
        });
    }
}
exports.HostService = HostService;
