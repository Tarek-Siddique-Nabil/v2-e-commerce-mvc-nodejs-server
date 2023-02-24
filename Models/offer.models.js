// models/offer.js

const mongoose = require('mongoose');

const offerSchema = new mongoose.Schema({
  details: { type: String, required: true },
  image: { type: String, required: true },
});

const Offer = mongoose.model('Offer', offerSchema);

module.exports = Offer;
