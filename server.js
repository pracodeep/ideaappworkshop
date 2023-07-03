const express=require('express');
const { PORT } = require('./configs/sever.config');
const mongoose=require('mongoose');
const dbConfig=require('./configs/db.config');
//const { init } = require('./models/user.model');
const userModel=require('./models/user.model');
const bcrypt=require('bcrypt');



const app=express();




//logic to connect to mongodb and create an admin user

//NEED TO HAVE THE MONGODB UP AND RUNNING IN YOUR LOCAL MACHINE
mongoose.connect(dbConfig.DB_URL)

const db=mongoose.connection;
db.on("error",()=>{
    console.log("error while connction database")
})
db.once("open",()=>{
    console.log("DB is connected")
    init();
})
 async function init(){
   
    //check if the user already presesnt

    let admin= await userModel.findOne({
        userId:"admin"
    })
    if(admin){
        console.log("Admin user already exist")
        return;
    }

      admin=await userModel.create({
        name:"pradeep-singh",
        userId:"admin",
        email:"ps951854@gmail.com",
        userType:"ADMIN",
        password:bcrypt.hashSync("welcome1",8)

        
    })
    console.log(admin)
}

app.listen(PORT,()=>{
    console.log(`server started  on the port number ${PORT}`);
})