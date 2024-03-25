const express = require("express");
const router = express.Router();
const MenuItem = require("../models/Menu");
const { model } = require("mongoose");

router.post("/", async (req, res) => {
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

router.get("/", async (req, res) => {
  try {
    const response = await MenuItem.find();
    console.log("Data fetched successfully");
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Error getting data" });
  }
});

module.exports = router;
