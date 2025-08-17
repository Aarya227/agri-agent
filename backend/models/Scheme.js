const mongoose = require("mongoose");

const schemeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  eligibility: { type: String },
  benefits: { type: String },
  language: { type: String, default: "en" }, // e.g., en, hi, mr
  link: { type: String }
});

module.exports = mongoose.model("Scheme", schemeSchema);
