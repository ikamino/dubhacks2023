import express from 'express';

const app = express();

// Set up middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Set up routes
app.get('/', (req, res) => {
    res.send('Welcome to the Airbnb-type application!');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
