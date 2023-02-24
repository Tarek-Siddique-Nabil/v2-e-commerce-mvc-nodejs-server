const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 50,
  },
  price: {
    type: String,
    required: true,
    min: 0.01,
  },
  priceb2b: {
    type: String,
    required: true,
    min: 0.01,
  },
  shipping: {
    type: String,
    required: true,
    min: 0,
  },
  description: {
    type: String,
    required: true,
    minlength: 10,
    maxlength: 500,
  },
  category: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 20,
  },
  subCategory: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 20,
  },
  image: {
    type: String,
    required: true,
    match: /^(https?:\/\/)?[\w-]+(\.[\w-]+)+([\w.,@?^=%&:/~+#-]*[\w@?^=%&/~+#-])?$/,
  },
  spec: {
    type: [{
      highLightPoint: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 100,
      },
    }],
    required: true,
  },
  createdOn: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Products", ProductSchema);
