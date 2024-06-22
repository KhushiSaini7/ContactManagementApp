const asyncHandler= require('express-async-handler');
const Contact=require('../models/contactModel');

//@desc get all contacts
//@route GET /api/contacts
//@access public
const getContact= asyncHandler(async (req,res)=>{
    const contacts= await Contact.find();
    res.status(200).json(contacts);
});


//@desc get all contacts
//@route POST /api/contacts
//@access public
const createContact= asyncHandler(async (req,res)=>{
    console.log("The request body is:", req.body);
    const{name,email,phone}= req.body;
    if(!name || !email || !phone){
        res.status(400);
        throw new Error("All fields are mandatory!")
    }
    const contact = await  Contact.create({
       name,email,phone 
    });
    res.status(201).json(contact);
});

const getContactbyID= asyncHandler(async (req,res)=>{
    const contact = await  Contact.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error("Contact Not found");
    }
    res.status(200).json(contact);
}); 

//@desc update contacts
//@route PUT /api/contacts/:id
//@access public
const updateContactbyId=asyncHandler(async(req,res)=>{
    const contact = await  Contact.findById(
        req.params.id);
    if(!contact){
        res.status(404);
        throw new Error("Contact Not found");
    }

    const updatedContact= await Contact.findByIdAndUpdate (
        req.params.id,
        req.body,
        {new:true}

    );
    res.status(200).json(updatedContact);
});


const deletecontactbyID= asyncHandler(async (req,res)=>{
    const contact = await  Contact.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error("Contact Not found");
    }
    await Contact.deleteOne();
    res.status(200).json(contact);
});

module.exports= {getContact, createContact, getContactbyID, updateContactbyId, deletecontactbyID};

