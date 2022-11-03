const express = require("express");
const router = express.Router();
// user model -> table
const User = require("../models/model-user");
const bcrypt = require("bcrypt");

// require the auth controller
const authController = require("../controllers/controller-auth");

// GET - 
router.get("/login", authController.displayLoginPage);
