const mongoose = require('mongoose');

const contactSchema= mongoose.Schema({
    name:{
        type: String,
        require:[true, "Please add the contact name"],
    },

    email:{
        type: String,
        require:[true, "Please add contact email address"],
    },

    phone:{
        type: String,
        require:[true, "Please add contact phone number"],
    },
},
{
    timestamps: true,
}
);

module.exports= contactSchema;