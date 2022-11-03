const express = require("express");
const router = express.Router();

const profileController = require("../controllers/controller-profile");

router.get("/", profileController.authCheck, profileController.displayProfilePage);