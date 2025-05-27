const express = require("express");
const path = require("path");
router = express.Router();
const productController = require("../../controller/productController");
const verifyRoles = require("../../middleware/verifyRoles");
const roles_list = require("../../config/roles_list");

router
  .route("/")
  
  .get(verifyRoles(roles_list.employee),productController.getAllProduct)
  .post(productController.creatNewProduct)
  .put(verifyRoles(roles_list.employee),productController.updateProduct)
  .delete(verifyRoles(roles_list.employee),productController.deleteProduct);

router.route("/:id").get(productController.getProduct);

module.exports = router;
