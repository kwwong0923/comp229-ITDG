// index routing
// require express and create Router
const express = require("express");
const router = express.Router();

// require the index controller
const indexController = require("../controllers/controller-index");

// homepage
router.get("/", indexController.displayHomepage);
router.get("/home", indexController.displayHomepage);
