const express = require("express");
const {
  getAllProducts,
  addProduct,
  getOneProducts,
  updateProduct,
  deleteProduct,
} = require("../Controllers/product.controller");
const router = express.Router();

router.get("/", getAllProducts);
router.get("/:id", getOneProducts);
router.post("/", addProduct);
router.patch("/:id", updateProduct);
router.delete("/:id", deleteProduct);
router;

module.exports = router;
