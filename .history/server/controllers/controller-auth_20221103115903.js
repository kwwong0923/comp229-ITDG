const express = require("express");
const router = express.Router();
const passport = require("passport");
const User = require("../models/model-user");
const bcrypt = require("bcrypt");

// display login page
module.exports.displayLoginPage = (req, res) => 
{
    res.render("login");
}

// display signup page
module.exports.displaySignUpPage = (req, res) => 
{
    res.render("signup");
}

module.exports.processSignUpPage = (req, res) => 
{
    let {name, email, password} = req.body;
    if (password.length < 8)
    {
        return res.redirect("/auth/signup");
    }
}
// logout function
 module.exports.processLogout = (req, res) => 
{
    req.logOut((err) => 
    {
        if(err)
        {
            return res.send(err);
        }
        res.redirect("/")
    })
}