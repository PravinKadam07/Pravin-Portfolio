const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  tags: [{ name: String, color: String }],
  image: { type: String, required: true },
  source_code_link: { type: String, required: true },
});

module.exports = mongoose.model("Project", ProjectSchema);