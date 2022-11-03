const express = require("express");
const router = express.Router();
const passport = require("passport");
const User = require("../models/model-user");
const bcrypt = require("bcrypt");

// GET - login 
router.get("/login", (req, res) => 
{
    res.render("login");
})
