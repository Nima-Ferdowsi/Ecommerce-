const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  price: {
    type: Number,
    required: true,
    trim: true,
  },
  image: {
    type: String,
    required: true,
  },
  category: {
    type: Object,
  },
  subcategory: {
    type: String,
  },
  subitem: {
    type: String,
  },
  features: {
    type: Array,
  },
  createdBy: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
const Product = mongoose.model("products", productSchema);

module.exports = Product;
