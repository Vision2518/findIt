const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

dotenv.config({
    path:'./config/config.env',
});

const app = express();

// Connect to MongoDB
connectDB();

app.get("/", (req, res) => {
    res.send("Server is running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});