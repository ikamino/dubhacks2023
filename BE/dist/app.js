"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const hostService_js_1 = require("./services/host/hostService.js");
const test_js_1 = require("./test.js");
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;
const uri = 'mongodb+srv://ikamino:6cIQ08LdpaKdnnov@dubhacks2023.vjneweq.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('error', (error) => {
    console.error('MongoDB connection error:', error);
});
db.once('open', () => {
    console.log('Successfully connected to MongoDB database');
});
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
const host = new hostService_js_1.HostService();
host
    .createListing(test_js_1.mockListing)
    .then((listing) => {
    console.log('Listing created:', listing);
})
    .catch((error) => {
    console.error('Error creating listing:', error);
});
