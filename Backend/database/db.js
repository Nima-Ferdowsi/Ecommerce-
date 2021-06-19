const mongoose=require('mongoose');

//function for connecting to db
const connectDb=async(uri)=>{
    try {
        const conn=await mongoose.connect(uri,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: true,
            
           })
            
    } catch (err) {
        console.log(err);
        process.exit(1)
    }
    
    
    }
    
    module.exports=connectDb 