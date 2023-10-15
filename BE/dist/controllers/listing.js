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
exports.updateListing = exports.deleteListing = exports.createListing = exports.listListings = void 0;
const Listing_js_1 = __importDefault(require("../models/Listing.js"));
const listListings = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const listings = yield Listing_js_1.default.find();
        res.status(200).json(listings);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});
exports.listListings = listListings;
const createListing = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const listingData = req.body;
        if (!listingData) {
            return res.status(400).json({ error: 'Missing listing data' });
        }
        const createdListing = yield Listing_js_1.default.create(listingData);
        res.status(201).json(createdListing);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});
exports.createListing = createListing;
const deleteListing = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        if (!id) {
            return res.status(400).json({ error: 'Missing listing ID' });
        }
        const deletedListing = yield Listing_js_1.default.findByIdAndDelete(id);
        res.status(200).json(deletedListing);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});
exports.deleteListing = deleteListing;
const updateListing = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const listingData = req.body;
        if (!id || !listingData) {
            return res.status(400).json({ error: 'Missing listing ID or data' });
        }
        const updatedListing = yield Listing_js_1.default.findByIdAndUpdate(id, listingData, { new: true });
        res.status(200).json(updatedListing);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});
exports.updateListing = updateListing;
