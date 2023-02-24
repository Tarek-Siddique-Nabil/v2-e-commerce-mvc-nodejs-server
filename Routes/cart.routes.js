// routes/cartRoutes.js

const express = require("express");
const router = express.Router();
const verifyJWT = require("../middleware/auth.jwt");
const cartController = require("../controllers/cart.controllers");

router.get("/cart",  cartController.getCart);
router.post("/cart", cartController.addToCart);
router.put("/cart/:id", cartController.updateCart);
router.delete("/cart/:id", cartController.deleteCartItem);
router.delete("/cart", cartController.deleteCart);

module.exports = router;
