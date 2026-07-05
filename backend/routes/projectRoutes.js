const express = require("express");
const router = express.Router();

const { getProject, createProject } = require("../controllers/projectController");

// get projects 
router.get("/", getProject);

// create projects
router.get("/create", createProject);

module.exports = router;

