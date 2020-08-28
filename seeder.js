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
mongoose.connect(process.env.APP_DB, {
  useFindAndModify: true,
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

//Read JSON files
const users = JSON.parse(
  fs.readFileSync(`${__dirname}/_data/users.json`, "utf-8")
);

// Import into DB
const importData = async () => {
  try {
    await User.create(users);
    console.log("Data imported...", green.inverse);
    process.exit();
  } catch (err) {
    console.log(err);
  }
};

// Delete data
const deleteData = async () => {
  try {
    await User.deleteMany();
    console.log("Data Destroyed...", red.inverse);
    process.exit();
  } catch (err) {
    console.log(err);
  }
};
