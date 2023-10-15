const Redis = require('../../../src/app');

export const listListings = async (req: Request, res: Response) => {
  try {
    Redis.keys('*', (error, keys) => {
      if(error) {
        // reject promise here
        return;
      }
      const result = [];

      // fetch and add to result, then return
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
    }
};

export const createListing = async (req: Request, res: Response) => {
  try {
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
    }
};

export const deleteListing = async (req: Request, res: Response) => {
  try {
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
    }
};

// router.route.get('/listings/', async (req, res) => {
//   try {
//       const createdListing = await userService.getListing(listingData);
//       res.status(201).json(createdListing);
//       } 
//   catch (error) {
//       console.error(error);
//       res.status(500).json({ error: 'Internal server error' });
//       }
// });

// router.route.post('/listings/', async (req, res) => {
//   try {
//     const listingData = req.body;
//     if (!listingData) {
//       return res.status(400).json({ error: 'Missing listing data' });
//     }

//     const createdListing = await userService.createListing(listingData);
//     res.status(201).json(createdListing);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Internal server error' });
//   }
// });

// router.route.delete('/listings/:id', async (req, res) => {
//   try {
//       const listingData = req.body;
//       if (!listingData) {
//           return res.status(400).json({ error: 'Missing listing data' });
//       }
  
//       const createdListing = await userService.getListing(listingData);
//       res.status(201).json(createdListing);
//       } 
//   catch (error) {
//       console.error(error);
//       res.status(500).json({ error: 'Internal server error' });
//       }
// });
