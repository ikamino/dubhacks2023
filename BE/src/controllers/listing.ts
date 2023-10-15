import { Request, Response } from 'express';
import Listing from '../models/Listing';

const BASE_URL = 'http://localhost:3000'; // replace with your MongoDB server URL


export const listListings = async (req: Request, res: Response) => {
  try {
    const listings = await Listing.find();
    res.status(200).json(listings);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};


export const createListing = async (req: Request, res: Response) => {
  try {
    const listingData = req.body;
    if (!listingData) {
      return res.status(400).json({ error: 'Missing listing data' });
    }

    const createdListing = await Listing.create(listingData);
    res.status(201).json(createdListing);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const deleteListing = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    if (!id) {
      return res.status(400).json({ error: 'Missing listing ID' });
    }

    const deletedListing = await Listing.findByIdAndDelete(id);
    res.status(200).json(deletedListing);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const updateListing = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const listingData = req.body;
    if (!id || !listingData) {
      return res.status(400).json({ error: 'Missing listing ID or data' });
    }

    const updatedListing = await Listing.findByIdAndUpdate(id, listingData, { new: true });
    res.status(200).json(updatedListing);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
