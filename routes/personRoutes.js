const express = require("express");
const router = express.Router();
const Person = require("../models/Person");

router.post("/", async (req, res) => {
  try {
    const data = req.body;
    const newPerson = new Person(data);
    const response = await newPerson.save();
    console.log("Data saved successfully");
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Error saving data" });
  }
});

router.get("/", async (req, res) => {
  try {
    const response = await Person.find();
    console.log("Data fetched successfully");
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Error getting data" });
  }
});

router.get("/:workType", async (req, res) => {
  try {
    const wokType = req.params.workType;
    if (wokType == "chef" || wokType == "manager" || wokType == "waiter") {
      const response = await Person.find({ work: wokType });
      console.log("Response fetched from server successfully");
      res.status(200).json(response);
    } else {
      res.status(500).json({ error: "Error getting data" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Invalid Work Type." });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const personID = req.params.id;
    const updatePersonData = req.body;
    const response = await Person.findByIdAndUpdate(
      personID,
      updatePersonData,
      {
        new: true,
        runValidators: true,
      }
    );
    if (!response) {
      return res.status(404).json({ error: "Person not found" });
    }
    console.log("Data updated successfully");
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Error updating data" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const personID = req.params.id;
    const response = await Person.findByIdAndDelete(personID);
    if (!response) {
      return res.status(404).json({ error: "Person not found" });
    }
    console.log("Data deleted successfully");
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Error deleting data" });
  }
});

module.exports = router;
