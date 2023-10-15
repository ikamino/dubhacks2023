const password = "6cIQ08LdpaKdnnov";
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;
const uri = "mongodb+srv://ikamino:<password>@dubhacks2023.vjneweq.mongodb.net/?retryWrites=true&w=majority";
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
// Replace 'mongodb://localhost/mydatabase' with your MongoDB connection string
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
// Handle connection errors
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
    console.log('Successfully connected to MongoDB database');
});
//# sourceMappingURL=app.js.map