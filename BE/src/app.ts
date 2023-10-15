import { AppDataSource } from "./database/index";
import { ListingService } from "./services/ListingService";
const express = require("express");
const app = express();
const port = 8000;

AppDataSource.initialize()
  .then(() => console.log("CockroachDB connected"))
  .catch((e) => console.log(e));

app.use(express.json());

app.use("/routes/listing", require("./routes/listing"));

app.listen(port, () => console.log(`Server running on Port ${port}`));

const mockListing = {
  id: 4,
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

const mockListing2 = {
  id: 4,
  title: "nuhuh",
  imageDir: "https://images.unsplash.com/photo-1558980664-1eefa5b4c0e4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGFya2luZyUyMHNwYWNlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
  userID: 1,
  hostID: 1,
  address: "1234 Main St",
  pricePerHour: 5,
  isAvailable: true,
  rating: 5,
  description: "This is a parking space"
}

// import axios from "axios";
// const listing = axios.get(`http://localhost:8000/routes/listing`).then((res) => {
//   console.log(res.data);
// });

// const listing2 = axios.post(`http://localhost:8000/routes/listing`, mockListing).then((res) => {
//   console.log(res.data);
// });
// const listing3 = axios.put(`http://localhost:8000/routes/listing`, mockListing2).then((res) => {
//   console.log(res.data);
// });
// const listing4 = axios.get(`http://localhost:8000/routes/listing`).then((res) => {
//   console.log(res.data);
// });

