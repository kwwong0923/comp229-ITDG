const express = require("express");
const router = express.Router();
// user model -> table
const User = require("../models/model-user");
const bcrypt = require("bcrypt");

// require the auth controller
const indexController = require("../controllers/controller-index");

router.get("/login", )