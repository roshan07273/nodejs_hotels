const mongoose = require("mongoose");

// Define the MongoDB connection URL.
const mongoURL = "mongodb://127.0.0.1:27017/hotels";

// Set up the MongoDB connection
mongoose
  .connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB server");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

// Get the default connection
const db = mongoose.connection;

db.on("error", (err) => {
  console.error("MongoDB connection error:", err);
});

db.on("disconnected", () => {
  console.log("Disconnected from MongoDB server");
});

// Export the MongoDB connection
module.exports = db;
