const mongoose = require("mongoose");

const user = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
    trim: true,
  },
  lastname: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  pass: {
    type: String,
    required: true,
    maxlength: 255,
  },
  isAdmin: {
    type: Boolean,
    default:false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
const User=mongoose.model('user',user)
module.exports=User
