const Product = require("../model/product");
const { cloudinary } = require("./cloudinary");

exports.UploadImage = (req, res) => {
  return new Promise(async (resolve, reject) => {
    try {
      const upload = await cloudinary.uploader.upload(req.file.path, {
        upload_preset: "ecommerce",
      });
      resolve(upload);
    } catch (error) {
      reject(error);
    }
  });

 
};

exports.createProduct=(res,values)=>{
    Product.create(values)
    .then((data) => {
      res
        .status(200)
        .send({ status: 200, message: "success", detaile: data });
    })
    .catch((err) => {
      res.send({ message: "err", detaile: err });
    });
}