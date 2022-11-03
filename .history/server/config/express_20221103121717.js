// require modules
const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const ejs = require("ejs");
const session = require('express-session');
const path = require("path");

// Router (routes js file)
let indexRouter = require("../routes/route-index");

// view engin setup
app.set("views", path.join(__dirname, "../views"));
app.set("view engine", "ejs");
app.use(express.json());
// grabs info from the post data from user
app.use(express.urlencoded({extended: true}));
app.use(session(
    {
        secret: process.env.SESSION_SECRET,
        resave: false,
        saveUninitialized: false,
    }
));

// locate the static file
app.use(express.static(path.join(__dirname, "../../public")));
app.use(express.static(path.join(__dirname, "../../node_modules")));




// handling user routing request
app.use("/auth", )
app.use("/", indexRouter);

// exports the app
module.exports = app;
