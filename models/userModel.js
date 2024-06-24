const mongoose = require('mongoose');

const userSchema= mongoose.Schema({
    user_id:{
        type: mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"User",
    },
    username:{
        type: String,
        require:[true, "Please add the username"],
    },

    email:{
        type: String,
        require:[true, "Please add email address"],
        unique:[true,"Email already exits"]
    },

    password:{
        type: String,
        require:[true, "Please add userpassword"],
    },
},
{
    timestamps: true,
}
);

module.exports= mongoose.model("User", userSchema);