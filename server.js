const express = require('express');
const dotenv = require('dotenv').config();


//rest object
const app= express();

const port=process.env.PORT|| 5000;

app.get("/api/contacts",(req,res)=>{
    res.status(200).json({message:"Get all contacts"});
})
app.listen(5000,()=>{
    console.log('server running on port', port);
})

