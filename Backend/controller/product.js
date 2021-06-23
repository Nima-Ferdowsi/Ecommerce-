const mongoose = require("mongoose");
const Product = require("../model/product");
const Validation = require("../utils/validation");

exports.newProduct = async (req, res) => {
  const {
    title,
    price,
    category_obj,
    subcategory,
    subitem,
    features_obj,
    createdBy,
  } = req.body;

  const image = await req.file.filename;
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
      let values = {
        title,
        price,
        image: req.file.filename,
        category,
        subcategory,
        subitem,
        features,
        createdBy,
      };

      Product.create(values)
        .then((data) => {
          res
            .status(200)
            .send({ status: 200, message: "success", detaile: data });
        })
        .catch((err) => {
          res.send({ message: "err", detaile: err });
        });
    })
    .catch((err) => {
      res.send({ message: "validation error", detailes: err.errors });
    });
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
