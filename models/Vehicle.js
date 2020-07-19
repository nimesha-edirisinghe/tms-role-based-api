const { Schema, model } = require("mongoose");

const VehicleSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Please add a name"],
    },
    model: {
      type: String,
      required: tru,
    },
  },
  { timestamps: true }
);

module.exports = model("vehicles", VehicleSchema);
