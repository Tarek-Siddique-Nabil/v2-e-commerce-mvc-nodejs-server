const ProductSchema = require("../Models/product.models");

const getAllProducts = async (req, res) => {
  try {
    const query = {};
    if (req.query?.category) query.category = req.query.category;
    if (req.query?.subCategory) query.subCategory = req.query.subCategory;

    const products = await ProductSchema.find(query);
    res.status(200).send(products);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};
const getOneProducts = async (req, res) => {
  try {
    const id = req.params.id;
    const product = await ProductSchema.findOne({ _id: id });
    res.status(200).send(product);
  } catch (error) {
    res.status(500).json(error);
  }
};
const addProduct = async (req, res) => {
  try {
    const {
      id,
      title,
      price,
      priceb2b,
      shipping,
      description,
      category,
      subCategory,
      image,
      spec,
    } = req.body;

    const product = new ProductSchema({
      id,
      title,
      price,
      priceb2b,
      shipping,
      description,
      category,
      subCategory,
      image,
      spec,
    });

    const createdProduct = await product.save();
    res.status(201).json(createdProduct);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server Error' });
  }
};

const updateProduct = async (req, res) => {
  try {
    const { title, price, priceb2b, description, category, subCategory } =
      req.body;
    const id = req.params.id;
    const product = await ProductSchema.findById(id);
    if (!product) return res.status(404).json({ msg: "Product not found" });
    product.title = title;
    product.price = price;
    product.priceb2b = priceb2b;
    product.description = description;
    product.category = category;
    product.subCategory = subCategory;
    await product.save();
    res.json(product);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};
const deleteProduct = async (req, res) => {
  try {
    const id = req.params.id;
    await ProductSchema.deleteOne({ _id: id });
    res.status(200).send({ message: "Product Deleted" });
  } catch (error) {
    res.status(500).json(error);
  }
};
module.exports = {
  getAllProducts,
  getOneProducts,
  addProduct,
  updateProduct,
  deleteProduct,
};
