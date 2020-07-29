const { Schema, model } = require("mongoose");

const BookingSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Please add name"],
    },
  },
  { timestamps: true }
);

module.exports = model("booking", BookingSchema);
