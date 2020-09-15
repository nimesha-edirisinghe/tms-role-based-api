const { Schema, model } = require("mongoose");

const PackageSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Please add a name"],
    },
    type: {
      type: String,
      required: [true, "Please add a package type"],
    },
    amount: {
      type: Number,
      required: [true, "Please add a amount"],
    },
    description: {
      type: String,
      required: [true, "Please add a description"],
    },
  },
  { timestamps: true }
);

module.exports = model("packages", PackageSchema);
