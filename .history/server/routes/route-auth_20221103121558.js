const express = require("express");
const router = express.Router();
// user model -> table
const User = require("../models/model-user");
const bcrypt = require("bcrypt");
const passport = require("passport");

// require the auth controller
const authController = require("../controllers/controller-auth");

// GET - login -> display login page
router.get("/login", authController.displayLoginPage);

// POST - login -> login function
router.post("/login", passport.authenticate("local", 
{
    failureRedirect: "/auth/login",
    failureFlash: "username or password is wrong",
}),
(req, res) =>
{
    res.redirect("/profile")
})

// GET - logout -> logout the current user
router.get("/logout", authController.processLogout);

// GET - signup -> display signup page
router.get("/signup", authController.displaySignUpPage);

// POST - signup -> sign up new user
router.post("/signup", authController.processSignUpPage);

// GET - GOOGLE
router,get("/google", passport.authenticate("google", 
{
    scope: ["profile", "email"],
    prompt: "select_account",
}));

// GET - google response -> redirect
router.get("/google/redirect", passport.authenticate("google"), (req, res) => 
{
    res.redirect("/profile");
})

module.exports = router;