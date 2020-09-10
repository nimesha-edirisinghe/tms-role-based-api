const { Schema, model } = require("mongoose");

const BookingSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Please add a name"],
    },
    type: {
      type: String,
      required: [true, "Please add a booking type"],
    },
    description: {
      type: String,
      required: [true, "Please add a description"],
    },
    guests: {
      type: Number,
      required: [true, "Please add no of guests"],
    },
    discount: {
      type: String,
      required: [true, "Please add a discount"],
    },
  },
  { timestamps: true }
);

module.exports = model("booking", BookingSchema);
