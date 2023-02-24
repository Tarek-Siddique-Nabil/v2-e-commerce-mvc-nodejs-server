const Cart = require("../models/cart.models");

// controllers/cartController.js

const cartController = {
  getCart: async (req, res) => {
    try {
      // const decodedEmail = req.decoded.email;
      // const email = req.query.email;
      const decodedEmail = "test@gmail.com";
      const email = "test@gmail.com";
      console.log({ email, decodedEmail });
      if (email === decodedEmail) {
        const carts = await Cart.find({ email });
        res.send(carts);
      } else {
        res.status(403).send({ message: "forbidden access" });
      }
    } catch (error) {
      console.error(error);
      res.status(500).send({ message: "Internal server error" });
    }
  },
  addToCart: async (req, res) => {
    try {
      const { email, productId, quantity } = req.body;
      const cart = await Cart.findOne({ email, productId });

      if (cart) {
        cart.quantity += quantity;
        await cart.save();
        const carts = await Cart.find({ email });
        res.send(carts);
      } else {
        const newCart = new Cart({ email, productId, quantity });
        await newCart.save();
        const carts = await Cart.find({ email });
        res.send(carts);
      }
    } catch (error) {
      console.error(error);
      res.status(500).send({ message: "Internal server error" });
    }
  },
  updateCart: async (req, res) => {
    try {
      const id = req.params.id;
      console.log("🚀 ~ file: cart.controllers.js:48 ~ updateCart: ~ id:", id)
      const { status } = req.body;
      const cart = await Cart.findById(id);

      if (status === "plus") {
        cart.quantity += 1;
      } else if (status === "minus") {
        cart.quantity -= 1;
      }

      await cart.save();
      res.send(cart);
    } catch (error) {
      console.error(error);
      res.status(500).send({ message: "Internal server error" });
    }
  },
  deleteCartItem: async (req, res) => {
    try {
      const id = req.params.id;
      const cart = await Cart.findByIdAndDelete(id);
      res.send(cart);
    } catch (error) {
      console.error(error);
      res.status(500).send({ message: "Internal server error" });
    }
  },
  deleteCart: async (req, res) => {
    try {
      const email = req.query.email;
      const carts = await Cart.deleteMany({ email });
      res.send(carts);
    } catch (error) {
      console.error(error);
      res.status(500).send({ message: "Internal server error" });
    }
  },
};

module.exports = cartController;
