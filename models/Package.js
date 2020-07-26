const { Schema, model } = require("mongoose");

const PackageSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Please add name"],
    },
    type: {
      type: String,
      required: [true, "Please add packaged type"],
    },
    amount: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = model("packages", PackageSchema);
