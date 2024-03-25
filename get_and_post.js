const express = require("express");
const app = express();
const db = require("./db");

const bodyParser = require("body-parser");
app.use(bodyParser.json());

const Person = require("./Person");

const MenuItem = require("./Menu");
app.get("/", function (req, res) {
  res.send("Welcome to my Hotel!");
});

//Create or store the person data in the database
app.post("/menu", async (req, res) => {
  try {
    const data = req.body;
    const newPerson = new MenuItem(data);
    const response = await newPerson.save();
    console.log("Data saved successfully");
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Error saving data" });
  }
});

// Get method to get the Person Data or Read the data

app.get("/menu", async (req, res) => {
  try {
    const response = await MenuItem.find();
    console.log("Data fetched successfully");
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Error getting data" });
  }
});
app.listen(3000, () => {
  console.log("Roshan Raturi is listening on 3000");
});
