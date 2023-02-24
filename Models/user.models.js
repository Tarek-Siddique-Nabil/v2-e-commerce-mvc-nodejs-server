const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true
  },
  number: {
    type: String,
    required: true
  },
  district: {
    type: String,
    required: true
  },
  upazila: {
    type: String,
    required: true
  },
  road: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  lastUpdate: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('User', userSchema);
