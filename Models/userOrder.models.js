const mongoose = require('mongoose');

const UserOrderSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true
  },
  transaction_id: {
    type: String,
    required: true
  },
  payment_number: {
    type: String,
    required: true
  },
  info: {
    type: Array,
    required: true
  },
  order: {
    type: Array,
    required: true
  },
  amount: {
    type: String,
    required: true
  },
  status: {
    type: String,
    required: true
  },
  time: {
    type: String,
    required: true
  }
});

const UserOrder = mongoose.model('UserOrder', UserOrderSchema);

module.exports = UserOrder;
