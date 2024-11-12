const mongoose = require("mongoose");

// MongoDB connection URI
const mongoURI = "mongodb://localhost:27017/graphQl-test";

// Connect to MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(mongoURI);
    mongoose.connection.once("open", () => {
      console.log("MongoDB connected...");
    });
  } catch (err) {
    console.error(err.message);
    process.exit(1); // Exit process if connection fails
  }
};

module.exports = connectDB;
