const express = require("express");
const {
  newProduct,
  findProductByCategory,
  findProductById,
  getlimitedProducts,
} = require("../controller/product");
const { v4: uuidv4 } = require("uuid");

const multer = require("multer");

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, `${file.fieldname}-${uuidv4()}--${Date.now()}.jpg`);
  },
});

const upload = multer({
  dest: "uploads/",
  storage,
});

const route = express.Router();

route.post("/product/create", [upload.single('image'),newProduct]);



route.get("/product/search", findProductByCategory);
route.get("/product/:id", findProductById);

route.get('/limit-product',getlimitedProducts)

module.exports = route;
