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

// local signup function
module.exports.processSignUpPage = async (req, res) => 
{
    let {name, email, password} = req.body;
    // check password
    if (password.length < 8)
    {
        console.log("password is less than 8!");
        return res.redirect("/auth/signup");
    }

    // check email does it register before
    let foundEmail = await User.findOne({email}).exec();
    if (foundEmail)
    {
        console.log("The email have been registered, please login with that email");
        return res.redirect("/auth/login");
    }

    // everything OK!
    let hashedPassword = await bcrypt.hash(password, 12);
    let newUser = new User(
        {name, email, password: hashedPassword}
    );
    await 
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