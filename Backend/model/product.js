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
 
});
const Product=mongoose.model('products',productSchema)

module.exports=Product