const express = require("express");
const router = express.Router();
const paystackController = require("../../controller/paystackController");

router.get("/",paystackController.initializeTransaction )










module.exports = router