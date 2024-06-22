const express= require('express');

const router= express.Router();

//const {getUser,createUser, getbyID, updateContactbyId, deletecontactbyID}= require('../controllers/userController')

router.post("/register",(req,res)=>{
    res.json({message:"Register the User"});
});

router.post("/login",(req,res)=>{
    res.json({message:"Register the User"});
});

router.post("/current",(req,res)=>{
    res.json({message:"current user information"});
});

module.exports= router;