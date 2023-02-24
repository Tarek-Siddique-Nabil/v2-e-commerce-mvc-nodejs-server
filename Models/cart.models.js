const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
      },
    productId: {
        type: String,
        required: true,
      },
    quantity: {
        type: Number,
        required: true,
      }
});

module.exports = mongoose.model('Cart', cartSchema);
