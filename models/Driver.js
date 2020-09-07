const { Schema, model } = require("mongoose");

const DriverSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Please add name"],
    },
    email: {
      type: String,
      required: [true, "Please add email"],
      unique: true,
      match: [/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/, "Please add a valid mail"],
    },
    bgroup: {
      type: String,
      required: [true, "Please add your blood group"],
    },
    contact: {
      type: String,
      required: [true, "Please add your contact number"],
    },
    birthday: {
      type: Date,
      required: [true, "Please add your birthday"],
    },
    address: {
      type: String,
      required: [true, "Please add your address"],
    },
  },
  { timestamps: true }
);

module.exports = model("users", DriverSchema);
