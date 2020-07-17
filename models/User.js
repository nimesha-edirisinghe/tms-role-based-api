const { Schema, model } = require("mongoose");

const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Please add a name"],
    },
    email: {
      type: String,
      required: [true, "Please add a email"],
    },
    contact: {
      type: String,
      required: [true, "Please add a contact number"],
    },
    role: {
      type: String,
      default: "user",
      enum: ["user", "admin", "superadmin"],
    },
    username: {
      type: String,
      required: [true, "Please add username"],
    },
    password: {
      type: String,
      required: [true, "Please add password"],
    },
  },
  { timestamps: true }
);

module.exports = model("users", UserSchema);
