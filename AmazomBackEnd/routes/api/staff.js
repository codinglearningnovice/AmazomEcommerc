const express = require("express");
const path = require("path");
router = express.Router();
const staffController = require("../../controller/staffController");
const verifyJWT = require("../../middleware/verifyJWT");

//const data = {}

//data.staff = require("../../model/staff.json");

router.route("/")
     .get(verifyJWT,staffController.getAllStaff)
     .post(staffController.creatNewProduct)
     .put (staffController.updateProduct)
     .delete(staffController.deleteProduct)

router.route("/:id")
     .get(staffController.getProduct)



module.exports = router