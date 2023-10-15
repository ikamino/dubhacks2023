const express = require('express');
const router = express.Router();
const userService = require('../services/userService');

// Route for creating a listing
router.post('/listings', async (req, res) => {
  try {
    const listingData = req.body;
    if (!listingData) {
      return res.status(400).json({ error: 'Missing listing data' });
    }

    const createdListing = await userService.createListing(listingData);
    res.status(201).json(createdListing);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// route to get listing data
router.get('/listings/', async (req, res) => {
    try {
        const listingData = req.body;
        if (!listingData) {
            return res.status(400).json({ error: 'Missing listing data' });
        }
    
        const createdListing = await userService.getListing(listingData);
        res.status(201).json(createdListing);
        } 
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
        }
    });



module.exports = router;