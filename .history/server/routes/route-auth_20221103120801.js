const express = require("express");
const router = express.Router();
// user model -> table
const User = require("../models/model-user");
const bcrypt = require("bcrypt");

// require the auth controller
const authController = require("../controllers/controller-auth");

// GET - login -> display login page
router.get("/login", authController.displayLoginPage);

// GET - logout -> logout the current user
router.get("/logout", authController.processLogout)

// GET - signup -> display signup page
router.get("/signup", authController.displaySignUpPage);

// POST - signup -> sign up new user
router.post("/signup", authController.processSignUpPage);

