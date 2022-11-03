// require modules
const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const ejs = require("ejs");
const session = require('express-session');
const path = require("path");
require("passport");

// Router (routes js file)
const indexRouter = require("../routes/route-index");
const authRouter = require("../routes/route-auth");

// middlewares
// view engine
app.set("views", path.join(__dirname, "../views"));
app.set("view engine", "ejs");
app.use(express.json());
// grabs info from the post data from user
app.use(express.urlencoded({extended: true}));
// express-session
app.use(session(
    {
        secret: process.env.SESSION_SECRET,
        resave: false,
        saveUninitialized: false,
    }
));
app.use(passport.initialize());
app.use(passport.session());

// locate the static file
app.use(express.static(path.join(__dirname, "../../public")));
app.use(express.static(path.join(__dirname, "../../node_modules")));




// handling user routing request
app.use("/auth", authRouter);
app.use("/", indexRouter);

// exports the app
module.exports = app;
