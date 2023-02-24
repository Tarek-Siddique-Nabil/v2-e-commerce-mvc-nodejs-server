// controllers/offerController.js

const Offer = require("../models/offer.models");

exports.getOffers = async (req, res) => {
  try {
    const offers = await Offer.find();
    res.json(offers);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
};

exports.createOffer = async (req, res) => {
  const { details, image } = req.body;
  const offer = new Offer({ details, image });
  try {
    const savedOffer = await offer.save();
    res.json(savedOffer);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
};

exports.deleteOffer = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await Offer.deleteOne({ _id: id });
    res.json(result);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
};
