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
    },
    bgroup: {
      type: String,
      required: [true, "Please add your blood group"],
    },
    contact: {
      type: String,
      required: [true, "Please add contact number"],
    },
    birthday: {
      type: Date,
      required: [true, "Please add birthday"],
    },
    address: {
      type: String,
      required: [true, "Please add address"],
    },
  },
  { timestamps: true }
);

module.exports = model("users", DriverSchema);
