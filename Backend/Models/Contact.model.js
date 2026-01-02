const mongoose = require("mongoose");

const ContactSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      trim: true
    },

    lastName: {
      type: String,
      required: true,
      trim: true
    },

    phoneNumber: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      match: [/^\S+@\S+\.\S+$/, "Please enter a valid email address"]
    },

    code: {
      type: String,
      required: true,
      trim: true
    }
  },
  {
    timestamps: true // createdAt & updatedAt
  }
);

// Indexes (MongoDB-level uniqueness)
ContactSchema.index({ phoneNumber: 1 }, { unique: true });
ContactSchema.index({ email: 1 }, { unique: true });

const ContactModel = mongoose.model("Contact", ContactSchema);

module.exports = ContactModel;
