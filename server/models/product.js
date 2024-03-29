const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  imageURL: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  price: {
    type: mongoose.Schema.Types.Decimal128,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("product", productSchema);
