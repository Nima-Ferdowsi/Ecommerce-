const Product = require("../model/product");
const Validation = require("../utils/validation");

exports.newProduct = async (req, res) => {
  const { title, price, category, subcategory, subitem } = req.body;

  const image = await req.file.filename;

  Validation.productValidation()
    .validate({
      title,
      price,
      image,
      category_name,
      subcategory,
      subitem,
    })
    .then(() => {
      let values = {
        title,
        price,
        image: req.file.filename,
        categoery: {
          category_id,
          category_name,
        },
        subcategory: { subcategory_id, subcategory_name },
        subitem: { subitem_id, subitem_name },
      };

      Product.create(values)
        .then((data) => {
          res.send({ message: "success", detaile: data });
        })
        .catch((err) => {
          console.log(err);
        });
    })
    .catch((err) => {
      res.send({ message: "validation error", detailes: err.errors });
    });
};

/* exports.newProduct = async (req, res) => {
  const {
    title,
    price,
    category_name,
    category_id,
    subcategory_name,
    subcategory_id,
    subitem_name,
    subitem_id,
  } = req.body;

  const image = await req.file.filename;

  Validation.productValidation()
    .validate({
      title,
      price,
      image,
      category_name,
      subcategory_name,
      subitem_name,
    })
    .then(() => {

      let values = {
        title,
        price,
        image: req.file.filename,
        categoery: {
          category_id,
          category_name,
        },
        subcategory: { subcategory_id, subcategory_name },
        subitem: { subitem_id, subitem_name },
      };


      Product.create(values)
        .then((data) => {
          res.send({ message: "success", detaile: data });
        })
        .catch((err) => {
          console.log(err);
        });


        
    })
    .catch((err) => {
      res.send({ message: "validation error", detailes: err.errors });
    });
};
 */
