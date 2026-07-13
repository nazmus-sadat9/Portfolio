const mongoose = require("mongoose") ;
const Project = require("../models/Project");


const getProject = async (req, res) => {
  try{

    const projects = await Project.find({});
    res.status(200).json(projects);

  } catch(err){
    res.status(500);
  }
}


const createProject = async (req, res) => {
  try {
    const data = await Project.create(req.body);
    res.status(201);
    console.log("Project added successfully.");

  } catch (err) {
    res.status(400);
    console.log("Project added failed", err);
  }
}



module.exports = {
  getProject,
  createProject
}
