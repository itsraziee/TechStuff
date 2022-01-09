const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
  productName: {
    type: String,
    required: true,
  },
  price: {
    type: mongoose.Schema.Types.Decimal128,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  subTotal: {
    type: mongoose.Schema.Types.Decimal128,
    required: true,
  },
  shippingFee: {
    type: mongoose.Schema.Types.Decimal128,
    required: true,
  },
  totalAmount: {
    type: mongoose.Schema.Types.Decimal128,
    required: true,
  },
});

module.exports = mongoose.model("cart", cartSchema);
