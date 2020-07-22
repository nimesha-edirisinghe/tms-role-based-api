const { Schema, model } = require("mongoose");

const VehicleSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Please add name"],
    },
    model: {
      type: String,
      required: [true, "Please add model"],
    },
    ecapacity: {
      type: String,
      default: "800cc",
      required: [true, "Please add engine capacity"],
    },
    owner: {
      type: String,
      required: [true, "Please add owner name"],
    },
  },
  { timestamps: true }
);

module.exports = model("vehicles", VehicleSchema);
