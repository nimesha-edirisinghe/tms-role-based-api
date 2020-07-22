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
  },
  { timestamps: true }
);

module.exports = model("users", DriverSchema);
