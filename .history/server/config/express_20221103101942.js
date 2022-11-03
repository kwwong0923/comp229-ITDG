// require modules
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const ejs = require("ejs");
const session = require('express-session');
const path = require("path");

// view engin setup
let viewLocation = path.join(__dirname, "../views");
app.set("views". viewLocation);
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(session(
    {
        secret: process.env.SESSION_SECRET,
        resave: false,
        saveUninitialized: false,
    }
))

// locate the static file
app.use(express.static(path.join(__dirname, "../../public")));
app.use(express.static(path.join(__dirname, "../../node_modules")));




// exports the app
module.exports = app;
