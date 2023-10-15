import { AppDataSource } from "./database/index";
const express = require("express");
const app = express();
const port = 8000;

AppDataSource.initialize()
  .then(() => console.log("CockroachDB connected"))
  .catch((e) => console.log(e));

app.use(express.json());

app.use("/routes/listing", require("./routes/listing"));

app.listen(port, () => console.log(`Server running on Port ${port}`));