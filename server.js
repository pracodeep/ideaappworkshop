const express=require('express');
const { PORT } = require('./configs/sever.config');


const app=express();

app.listen(PORT,()=>{
    console.log(`server started  on the port number ${PORT}`);
})