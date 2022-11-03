const express = require("express");
const router = express.Router();
const passport = require("passport");
const User = require("../models/model-user");
const bcrypt = require("bcrypt");

// login page
module.exports.displayLoginPage = (req, res) => 
{
    res.render("login");
}

// login out
module.exports.processLogout = (req, res) => 
{
    req.logOut((err) => 
    {
        if(err)
        {
            
        }
    })
}