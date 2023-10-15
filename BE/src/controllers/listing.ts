import { Request, Response } from "express";
import { AppDataSource } from "../database";
import { Listing } from "../models/Listing";

const mockListing1: Listing = {
    id: 1,
    title: "Parking Space",
    imageDir: "https://images.unsplash.com/photo-1558980664-1eefa5b4c0e4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGFya2luZyUyMHNwYWNlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
    userID: 1,
    hostID: 1,
    address: "1234 Main St",
    pricePerHour: 5,
    isAvailable: true,
    rating: 5,
    description: "This is a parking space"
  }
const mockListing2:Listing = {
    id: 2,
    title: "Parking Space",
    imageDir: "https://images.unsplash.com/photo-1558980664-1eefa5b4c0e4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGFya2luZyUyMHNwYWNlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
    userID: 1,
    hostID: 1,
    address: "1234 Main St",
    pricePerHour: 5,
    isAvailable: true,
    rating: 5,
    description: "This is a parking space"
  }
  const mockListing3: Listing = {
    id: 3,
    title: "Parking Space",
    imageDir: "https://images.unsplash.com/photo-1558980664-1eefa5b4c0e4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGFya2luZyUyMHNwYWNlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
    userID: 1,
    hostID: 1,
    address: "1234 Main St",
    pricePerHour: 5,
    isAvailable: true,
    rating: 5,
    description: "This is a parking space"
  }

let listingsMap: Listing[] = [mockListing1,mockListing2,mockListing3]
export const displayListing = async (req: Request, res: Response) => {
    try {
        res.json(listingsMap);
    } catch (error) {
        res.status(500).json({message: "Error retrieving listings."});
    }
};

// export const deleteListing = async (req: Request, res: Response) => {
//     const listingID = parseInt(req.params.listingID);
//     const listing = await listingRepository.findOneBy({
//         id: listingID
//     });

//     const user = await userRepository.findOneBy({
//         id: listing.userID
//     });

//     const host = await hostRepository.findOneBy({
//         id: listing.hostID
//     });

//     const userIndex = user!.bookings.findIndex((booking) => {
//         booking.id === listingID
//     });

//     const hostIndex = host!.hostedParkingSpaces.findIndex((spaces) => {
//         spaces.id === listingID
//     });

//     if (userIndex !== -1) {
//         user!.bookings.splice(userIndex, 1);
//         await userRepository.save(user);
//       } else if (hostIndex !== -1) {
//         host!.hostedParkingSpaces.splice(hostIndex, 1);
//         await hostRepository.save(host);
//       } else {
//         return res.status(404).json({ error: "Listing not found." });
//       }

//       await listingRepository.remove(listing);
//       res.send("Listing deleted successfully.");
// };
export const createListing = async (req: Request, res: Response) => {
    try {
        const listing = req.body as Listing;
        listingsMap.push(listing);
        res.json(listing);
    } catch (error) {
        res.status(500).json({ error: "Failed to create a listing." });
    }
}

export const updateListing = async (req: Request, res: Response) => {
    try {
        const listing = req.body as Listing;
        const index = listingsMap.findIndex((list) => list.id === listing.id);
        listingsMap[index] = listing;
        res.json(listing);
    } catch (error) {
        res.status(500).json({ error: "Failed to edit listing." });
    }
}
// export const createListing = async (req: Request, res: Response) => {
//     try {
//         const listing = req.body as Listing;
//         } catch (error) {
//             res.status(500).json({ error: "Failed to create a listing." });
//         }

//         const user = await userRepository.findOneBy({
//             id: parseInt(req.body.userID)
//         });

//         const host = await hostRepository.findOneBy({
//             id: parseInt(req.body.hostID)
//         });

//         await listingRepository.save(listing);

//         user.bookings.push(JSON.parse(JSON.stringify(listing)));
//         host.hostedParkingSpaces.push(JSON.parse(JSON.stringify(listing)));

//         await userRepository.save(user);
//         await hostRepository.save(host);
//         res.json(listing);
//     } catch (error) {
//         res.status(500).json({ error: "Failed to create a listing." });
//     }
// };

// export const updateListing = async (req: Request, res: Response) => {
//     try {
//         const listing = await listingRepository.findOneBy({
//             id: parseInt(req.params.listingID)
//         });

//         const user = await userRepository.findOneBy({
//             id: parseInt(req.body.userID)
//         });

//         const host = await hostRepository.findOneBy({
//             id: parseInt(req.body.hostID)
//         });

//         const userIndex = user.bookings.findIndex(
//             (list) => list.id === listing.id
//         );

//         const hostIndex = host.hostedParkingSpaces.findIndex(
//             (list) => list.id === listing.id
//         );

//         user.bookings[userIndex] = listing;
//         host.hostedParkingSpaces[userIndex] = listing;

//         await userRepository.save(user);
//         await hostRepository.save(host);
//         await listingRepository.save(listing);

//         res.status(500).json({error: "Failed to edit listing."});
//     } catch (error) {
//         return res.status(404).json({ error: "Listing not found" });
//     }
// };