const express = require("express");
const mongoose = require("mongoose");
const dotEnv = require("dotenv");
const bodyParser = require("body-parser");
var cors = require("cors");
const connectDb = require("./database/db");
const user = require("./routes/user");
const product = require("./routes/product");
const path=require('path');

const app = express();
const db = mongoose.connection;

//************************Setting and Middlewares*******************************//
//create proccess env
dotEnv.config({ path: "./config/config_env.env" });

//cors setting
app.use(cors()); 


app.use(bodyParser.json({limit:'50mb'}));
app.use(bodyParser.urlencoded({extended:true, limit:'50mb',parameterLimit: 1000000}))
app.use(express.static(path.join(__dirname, 'uploads'))) 

app.get("/uploads/:img",function (req, res) {
  res.sendFile(`${__dirname}/uploads/${req.params.img}`)
});
//**********************End of Setting and Middlewares*************************//
 
//*******Routes********//


app.use(user) 
app.use(product) 
//*****End Of Routes*****//


//************************Databases*******************************//
//connect to database
connectDb(process.env.MAIN_DB_URI);
// when database is connected
db.once("open", () => {
  console.log("Database Is Now Running");
});
//***********************End Databases***************************//


const port=process.env.PORT||5000

app.listen(port,()=>console.log(port)); 
   