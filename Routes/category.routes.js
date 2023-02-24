const express = require("express");
const categoryController = require("../Controllers/category.controller");

const router = express.Router();

router.get("/category", categoryController.getAllCategories);
router.post("/category", categoryController.createCategory);
router.delete("/category/:id", categoryController.deleteCategory);
router.delete(
  "/sub-category/:categoryId/:subcategoryId",
  categoryController.deleteSubcategory
);

module.exports = router;
