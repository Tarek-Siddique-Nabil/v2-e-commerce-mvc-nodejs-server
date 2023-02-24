const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
  value: String,
  label: String,
  children: [{
    value: String,
    label: String,
  }]
});

const Category = mongoose.model('Category', categorySchema);

module.exports = Category;
