// routes/offer.js

const express = require("express");
const router = express.Router();
const offerController = require("../controllers/offer.controllers");

router.get("/", offerController.getOffers);
router.post("/", offerController.createOffer);
router.delete("/:id", offerController.deleteOffer);

module.exports = router;
