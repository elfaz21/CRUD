const mongoose = require("mongoose");

const producrSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "please enter a product name"],
    },
    quantity: {
      type: Number,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
      required: false,
    },
  },
  {
    Timestamp: true,
  }
);

const Product = mongoose.model("Product", producrSchema);

module.exports = Product;
