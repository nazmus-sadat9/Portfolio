const mongoose= require("mongoose");

const ProjectSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  tags: [{String}],
  link: {
    type: String,
    required: true
  }
});


const Project = mongoose.model("Project", ProjectSchema);
module.exports = Project;
