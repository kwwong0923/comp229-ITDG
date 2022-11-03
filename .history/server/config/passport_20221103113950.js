const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20");
const User = require("../models/model-user");
const LocalStrategy = require("passport-local");
const bcrypt = require("bcrypt");

passport.serializeUser((user, done) => 
{
    console.log("Serializing User...");
    done(null, user._id);
    // grab the mongoDB's id -> store to the session
});

passport.deserializeUser(async (_id, done) => 
{
    console.log("")
})