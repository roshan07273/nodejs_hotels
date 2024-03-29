const express = require("express");
const app = express();
const db = require("./db");
require("dotenv").config();

const bodyParser = require("body-parser");
app.use(bodyParser.json());

const mongoURL = process.env.mongoURL || 3000;
app.get("/", function (req, res) {
  res.send("Welcome to my Hotel!");
});
const personRoutes = require("./routes/personRoutes");
const menuRoutes = require("./routes/menuRoutes");

app.use("/menu", menuRoutes);
app.use("/person", personRoutes);

app.listen(3000, () => {
  console.log("Roshan Raturi is listening on 3000");
});
