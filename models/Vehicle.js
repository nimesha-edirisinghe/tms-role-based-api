const { Schema, model } = require("mongoose");

const VehicleSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Please add a name"],
    },
    model: {
      type: String,
      required: true,
    },
    ecapacity: {
      type: String,
      required: true,
    },
    owner: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = model("vehicles", VehicleSchema);
