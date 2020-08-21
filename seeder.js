const fs = require("fs");
const mongoose = require("mongoose");
const colors = require("colors");
const dotenv = require("dotenv");

//Load env variables
dotenv.config({ path: "./.env" });
// Load models
const User = require("./models/User");
const Driver = require("./models/Driver");
const Booking = require("./models/Booking");
const Package = require("./models/Package");
const Vehicle = require("./models/Vehicle");

// Connect to DB
mongoose.connect();
