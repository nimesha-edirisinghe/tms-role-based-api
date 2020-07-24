const { Schema, model } = require("mongoose");

const PackageSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Please add name"],
    },
  },
  { timestamps: true }
);

module.exports = model("packages", PackageSchema);
