const mongoose = require("mongoose") ;
const Project = require("../models/Project");


const getProject = async (req, res) => {
  try{

    const projects = await Project.find({});
    res.status(200).json(projects);
    console.log("Project find successfully.");

  } catch(err){
    res.status(500);
    console.log("Project find failed.", err);
  }
}

const createProject = async () => {
  try {
    const data = await Project.create({
      id: 1,
      title: "Portfolio",
      description: "This my portfolio website.",
      tags: ["MERN", "Next", "GSAP"],
      link: "https://github.com/nazmus-sadat9/Portfolio.git"
    });
    res.status(201);
    console.log("Project added successfully.");

  } catch (err) {
    res.status(500)
    console.log("Project added failed", err);
  }
}

module.exports = {
  getProject,
  createProject
}
