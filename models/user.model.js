// this hold the schema of user
//it explain the diffrenet field how it will be stored  


const mongoose=require('mongoose');



const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    userId:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    
    },
    email:{
        type:       String,
        required:   true,
        unique:     true,
        MiniLength: 10,
        lowercase:  true
    },
    userType:{
        type:String,
        required:true,
        default:"CUSTOMER",
        enum:["CUSTOMER","ADMIN"]
    }
},{timestamps : true});


// define the collection where we will store

//this is for create collection

module.exports=mongoose.model("User",userSchema)