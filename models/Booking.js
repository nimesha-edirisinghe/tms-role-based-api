const { Schema, model } = require("mongoose");

const BookingSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Please add name"],
    },
    type: {
      type: String,
      required: [true, "Please add booking type"],
    },
    description: {
      type: String,
      required: [true, "Please add description"],
    },
    guests: {
      type: Number,
      required: [true],
    },
  },
  { timestamps: true }
);

module.exports = model("booking", BookingSchema);
