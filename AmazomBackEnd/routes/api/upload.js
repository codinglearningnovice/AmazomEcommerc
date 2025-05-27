const express = require("express");
const router = express.Router();

const uploadController = require("../../controller/uploadController");





router.get ("/", uploadController.uploadAuth_IK)



module.exports = router