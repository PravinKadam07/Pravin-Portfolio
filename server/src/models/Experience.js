const mongoose = require("mongoose");

const ExperienceSchema = new mongoose.Schema({
  title: { type: String, required: true },
  company_name: { type: String, required: true },
  icon: { type: String, required: true },
  iconBg: { type: String },
  date: { type: String },
  points: { type: [String], required: true },
});

module.exports = mongoose.model("Experience", ExperienceSchema);