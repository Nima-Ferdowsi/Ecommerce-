const mongoose=require('mongoose');

const categorySchema=new mongoose.Schema({

catergory:{
    type:String
},
subcategory:[{
    sub_title:String,
    items:Array
}]


})
const Category=mongoose.model('category',categorySchema)

module.exports=Category
