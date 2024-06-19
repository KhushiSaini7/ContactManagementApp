//@desc get all contacts
//@route GET /api/contacts
//@access public

const getContact= (req,res)=>{
    res.status(200).json({message:"Get all contacts"});
}

const createContact= (req,res)=>{
    console.log("The request body is:", req.body);
    const{name,email,phone}= req.body;
    if(!name || !email || !phone){
        res.status(400);
        throw Error("All fields are mandatory!")
    }
    res.status(200).json({message:"Create contacts"});
}

const getContactbyID=(req,res)=>{
    res.status(200).json({message:"Get contact for",id:req.params.id});
}
const updateContactbyId=(req,res)=>{
    res.status(200).json({message:"update contacts for", id:req.params.id});
}

const deletecontactbyID=(req,res)=>{
    res.status(200).json({message:"Delete contact for",id:req.params.id});
}

module.exports= {getContact, createContact, getContactbyID, updateContactbyId, deletecontactbyID};

