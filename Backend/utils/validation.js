const yup = require("yup");

class Validation {
  static signupValidation() {
    let schema = yup.object().shape({
      firstname: yup.string().required("please tell us your firstname"),
      lastname: yup.string().required("please tell us your lastname"),
      email: yup
        .string()
        .email(
          "is it a real email? I think you had mistake give me valid one please"
        )
        .required("please tell us your email"),
      pass: yup
        .string()
        .required(
          "Dont you want to secure your account so please give me your password"
        ),
    });
    return schema;
  }
  static productValidation() {
    let schema = yup.object().shape({
      title: yup.string().required("what is this product title?"),
      price: yup.string().required("How much this product will cost?"),
      image: yup.string().required("what is this product image"),
      category_name: yup.string().required("what category should I put your product"),
      subcategory: yup.string().required("what category should I put your product"),
      subitem: yup.string().required("what category should I put your product"),

    });
    return schema;
  }
}

module.exports = Validation;
