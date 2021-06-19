const User = require("../model/user");
const yup = require("yup");
const Validation=require('../utils/validation');


exports.signup = (req, res) => {
  try {
    Validation.signupValidation()
      .validate(req.body)
      .then(() => {
        User.findOne({ email: req.body.email }).then((user) => {
          if (!user) {
            User.create(req.body).then(() => {
              res.send({ message: "succses" });
            });
          } else {
            res.send({ message: "exist", detailes: "Dont you forget somthing use have already signed up with this email" });
          }
        });
      })
      .catch((err) => {
        
      res.send({message:'validation error',detailes:err.errors})
      });
  } catch (err) {
    res.send({ message: "error", detailes: err });
  }
};


//login function
exports.login = (req, res, next) => {
  User.findOne(req.body, (err, data) => {
    if (err) { 
      res.status(500).send({ status: 500, result:'there is error in the server' });
    } else if (data) {
      res.status(200).send({ status: 200, result: data });
    } else {
      res
        .status(404)
        .send({ status: 404, result: "UserName or password are inccorect" });
    }
  });
}; 
