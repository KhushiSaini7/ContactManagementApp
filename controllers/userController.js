const asyncHandler= require('express-async-handler');
const bcrypt= require('bcrypt');
const User= require('../models/userModel');

//@desc REGISTER a User
//@route POST /api/users/register
//@access public
const registerUser= asyncHandler(async (req,res)=>{
    const {username, email, password}= req.body;
    if(!username|| !email|| !password){
        res.status(400);
        throw new Error("All fields are mandatory");
    }
    const userAvailable= await User.findOne({email});
    if(userAvailable){
        res.status(400);
        throw new Error("User already exists");
    } 

    //Hash password
    const hashedpassword= await bcrypt.hash()

    res.json({message:"Register the User"});
});


//@desc Login a User
//@route GET /api/users/login
//@access public
const loginUser= asyncHandler(async (req,res)=>{
    res.json({message:"Login the User"});
});


//@desc  Current User
//@route GET /api/users/current
//@access private
const currentUser= asyncHandler(async (req,res)=>{
    res.json({message:"Login the User"});
});

module.exports= {registerUser, loginUser, currentUser};