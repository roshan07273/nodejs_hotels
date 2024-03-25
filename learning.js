const express = require("express");
const app = express();
const db = require("./db");

const bodyParser = require("body-parser");
app.use(bodyParser.json());

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
