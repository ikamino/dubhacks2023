import { AppDataSource } from "./database/index";
import "reflect-metadata";
const express = require("express");
const cors = require("cors");
const app = express();
const port = 8000;

AppDataSource.initialize()
  .then(() => console.log("CockroachDB connected"))
  .catch((e) => console.log(e));

app.use(express.json());
app.use(cors());

app.use("/routes/listing", require("./routes/listing"));

app.listen(port, () => console.log(`Server running on Port ${port}`));