const asyncHandler= require('express-async-handler');
const bcrypt= require('bcrypt');
const jwt = require('jsonwebtoken');
const User= require('../models/userModel');

//@desc REGISTER a User
//@route POST /api/users/register
//@access private
const registerUser= asyncHandler(async (req,res)=>{
    const {username, email, password}= req.body;
    if(!username|| !email|| !password){
        res.status(400);
        throw new Error("All fields are mandatory");
    }
    const userAvailable= await User.findOne({email});
    if(userAvailable){
        res.status(400);
        throw new Error("User already exists!!");
    } 

    //Hash password
    const hashedpassword= await bcrypt.hash(password, 10);
    console.log("Hashed password:", hashedpassword);
    const user= await User.create({
        username,
        email,
        password: hashedpassword,
    });
    console.log("User created", user);
    if(user){
        res.status(201).json({_id: user.id, email: user.email});
    }
    else{
        res.status(400);
        throw new Error("Invalid user data");
    }
    //
    res.json({message:"Register the User"});
});


//@desc Login a User
//@route GET /api/users/login
//@access private
const loginUser= asyncHandler(async (req,res)=>{
    const {email, password}= req.body;
    if(!email || ! password){
        res.status(400);
        throw new Error("All field are mandatory!");
    }
    const user = await User.findOne({email});

    //comparing with the data present in database
    if(user && (await bcrypt.compare(password, user.password))){
        const accessToken= jwt.sign({
            //payload which is going to be embedded in the token  // also unique access token secret to be added after this in .env file
            user: {
            username:user.username,
            email: user.email,
            id: user.id
        },
        },(process.env.ACCESS_TOKEN_SECRET),
        {expiresIn:"15m"}
    )
        res.status(200).json({accessToken});
    }
    else{
        res.status(401);
        throw new Error("Email or password is not valid")
    }
});


//@desc  Current User
//@route GET /api/users/current
//@access private
const currentUser= asyncHandler(async (req,res)=>{
    res.json(req.user);
});

module.exports= {registerUser, loginUser, currentUser};