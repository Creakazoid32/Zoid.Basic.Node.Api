// Import express
const express = require("express");

// Using express.router
const router = express.Router();

// Importing controllers classes
const HomeController = require("../controllers/HomeController");

// Using method from controller class imported to define routes
router.get('/', HomeController.index);

module.exports = router;