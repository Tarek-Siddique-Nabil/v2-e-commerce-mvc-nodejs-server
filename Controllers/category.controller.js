const Category = require('../models/category.models');

const categoryController = {
  getAllCategories: async (req, res) => {
    try {
      const categories = await Category.find();
      res.send(categories);
    } catch (error) {
      res.status(500).send(error.message);
    }
  },

  createCategory: async (req, res) => {
    const { category, newCategory, newSubCategory } = req.body;

    try {
      if (newCategory && newSubCategory) {
        const result = await Category.create({
          value: newCategory,
          label: newCategory,
          children: [{
            value: newSubCategory,
            label: newSubCategory,
          }],
        });
        return res.send(result);
      } else if (!newCategory && newSubCategory) {
        const query = { value: category };
        const result = await Category.updateOne(query, {
          $push: {
            children: {
              value: newSubCategory,
              label: newSubCategory,
            },
          },
        });
        return res.send(result);
      }
      return res.send("category not created");
    } catch (error) {
      res.status(500).send(error.message);
    }
  },

  deleteCategory: async (req, res) => {
    const categoryId = req.params.id;

    try {
      const result = await Category.deleteOne({ _id: categoryId });
      res.send(result);
    } catch (error) {
      res.status(500).send(error.message);
    }
  },

  deleteSubcategory: async (req, res) => {
    const { categoryId, subcategoryId } = req.params;

    try {
      const result = await Category.updateOne(
        { _id: categoryId },
        { $pull: { children: { _id: subcategoryId } } }
      );
      return res.json(result);
    } catch (error) {
      res.status(500).send(error.message);
    }
  },
};

module.exports = categoryController;
