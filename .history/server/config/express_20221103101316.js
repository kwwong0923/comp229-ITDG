// require modules
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const ejs = require("ejs");
const session = require('express-session');
const path = require("path");

// view engin setup
app.set("views". path.join(__dirname, "../views"));
app.set("view engine", "ejs");

// locate the static file
app.use(express.static(path.join(__dirname, "../../public")));
app.use(express.static(path.join(__dirname, "../../node_modules")))




// exports the app
module.exports = app;
