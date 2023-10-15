const express = require('express');
const redis = require('redis');
const { createClient } = redis;

const app = express();
const PORT = process.env.PORT || 3000;
const REDIS_PORT = process.env.REDIS_PORT || 6379;
const REDIS_HOST = "127.0.0.1";
  
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});

const client = redis.createClient({
    socket: {
      port: REDIS_PORT,
      host: REDIS_HOST,
    }
});

(async () => {
    await client.connect();
})();
  
console.log("Attempting to connect to redis");
client.on('connect', () => {
    console.log('Connected to Redis!');
});

client.on("error", (error) => {
    console.log("Are you running the Redis server: redis-server");
    console.log(`Error:${error}`);
});

// Set up middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Set up routes
app.get('/', (req, res) => {
    res.send('Welcome to the Airbnb-type application!');
});

module.exports = redis;