const mongoose = require("mongoose");
const Product = require("../model/product");
const { UploadImage, createProduct } = require("../utils/Upload");
const Validation = require("../utils/validation");

exports.newProduct = async (req, res) => {
  try {
    const {
      title,
      price,
      category_obj,
      subcategory,
      subitem,
      features_obj,
      createdBy,
    } = req.body;

    const image = req.file.path;
    const category = JSON.parse(category_obj);
    const features = JSON.parse(features_obj);

    Validation.productValidation()
      .validate({
        title,
        price,
        image,
        category_name: category.name,
        subcategory,
        subitem,
      })
      .then(() => {
        UploadImage(req, res)
          .then((data) => {
            let values = {
              title,
              price,
              image: data.url,
              category,
              subcategory,
              subitem,
              features,
              createdBy,
            };

            createProduct(res, values);
          })
          .catch((err) => {
            res.send({ message: "upload image failed", detaile: err });
          });
      })
      .catch((err) => {
        res.send({ message: "validation error", detailes: err.errors });
      });
  } catch (error) {
    console.log(error);
    res.send({status:500})
  }
};

exports.findProductByCategory = (req, res) => {
  //queries
  var query = {};
  //optional queries
  if (req.query.hasOwnProperty("subcategory")) {
    query.subcategory = req.query.subcategory;
  }
  if (req.query.hasOwnProperty("subitem")) {
    query.subitem = req.query.subitem;
  }
  if (req.query.hasOwnProperty("category")) {
    query["category.name"] = req.query.category;
  }
  Product.find(query)
    .then((data) => {
      res.send({ status: 200, data });
    })
    .catch((err) => {
      res.send({ status: 500, err });
    });
};

exports.findProductById = async (req, res) => {
  if (mongoose.Types.ObjectId.isValid(req.params.id)) {
    const data = await Product.findById(req.params.id);
    try {
      if (data) {
        res.send({ status: 200, data });
      } else {
        res.send({ status: 404, message: "mot Found" });
      }
    } catch (err) {
      res.send({ status: 500, err });
    }
  } else {
    res.send({ status: 404, message: "not Found" });
  }
};

exports.getlimitedProducts = async (req, res) => {
  try {
     const data = await Product.find({})
      .limit(4)
      .sort({ createdAt: -1 });
    res.send({ status: 200, data });
  } catch (err) {
    res.send({ status: 500, err });
  }
}