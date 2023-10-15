import { Request, Response } from "express";
import { AppDataSource } from "../database";
import { Listing } from "../models/Listing";
import { User } from "../models/User";
import { Host } from "../models/Host";

const listingRepository = AppDataSource.getRepository(Listing);
const userRepository = AppDataSource.getRepository(User);
const hostRepository = AppDataSource.getRepository(Host);

export const displayListing = async (req: Request, res: Response) => {
    try {
        const listings = await listingRepository.find();
        return res.json(listings);
    } catch (error) {
        console.log(error)
        return res.status(500).json({message: "Error retrieving listings."});
    }
};

export const deleteListing = async (req: Request, res: Response) => {
    const listingID = Number(req.params.listingID);
    const listing = await listingRepository.findOneBy({
        id: listingID
    });

    const user = await userRepository.findOneBy({
        id: listing.userID
    });

    const host = await hostRepository.findOneBy({
        id: listing.hostID
    });

    const userIndex = user!.bookings.findIndex((booking) => {
        booking.id === listingID
    });

    const hostIndex = host!.hostedParkingSpaces.findIndex((spaces) => {
        spaces.id === listingID
    });

    if (userIndex !== -1) {
        user!.bookings.splice(userIndex, 1);
        await userRepository.save(user);
      } else if (hostIndex !== -1) {
        host!.hostedParkingSpaces.splice(hostIndex, 1);
        await hostRepository.save(host);
      } else {
        return res.status(404).json({ error: "Listing not found." });
      }

      await listingRepository.remove(listing);
      return res.send("Listing deleted successfully.");
};

export const createListing = async (req: Request, res: Response) => {
    console.log(req.body)
    try {
        const listing = listingRepository.create({
            ...req.body,
            userID: Number(req.body.userID),
            hostID: Number(req.body.hostID),
            pricePerHour: Number(req.body.pricePerHour),
            rating: Number(req.body.rating)
        });

        const user = await userRepository.findOneBy({
            id: Number(req.body.userID)
        });

        const host = await hostRepository.findOneBy({
            id: Number(req.body.hostID)
        });

        await listingRepository.save(listing);

        user.bookings.push(JSON.parse(JSON.stringify(listing)));
        host.hostedParkingSpaces.push(JSON.parse(JSON.stringify(listing)));

        await userRepository.save(user);
        await hostRepository.save(host);
        return res.json(listing);
    } catch (error) {
        console.log(error)
        return res.status(500).json({ error: "Failed to create a listing." });
    }
};

export const updateListing = async (req: Request, res: Response) => {
    try {
        const listing = await listingRepository.findOneBy({
            id: Number(req.params.listingID)
        });

        const user = await userRepository.findOneBy({
            id: Number(req.body.userID)
        });

        const host = await hostRepository.findOneBy({
            id: Number(req.body.hostID)
        });

        const userIndex = user.bookings.findIndex(
            (list) => list.id === listing.id
        );

        const hostIndex = host.hostedParkingSpaces.findIndex(
            (list) => list.id === listing.id
        );

        user.bookings[userIndex] = listing;
        host.hostedParkingSpaces[userIndex] = listing;

        await userRepository.save(user);
        await hostRepository.save(host);
        await listingRepository.save(listing);

        return res.status(500).json({error: "Failed to edit listing."});
    } catch (error) {
        console.log(error)
        return res.status(404).json({ error: "Listing not found" });
    }
};