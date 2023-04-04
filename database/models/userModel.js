const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    email:String,
    password:String
    // if you want to add the date related information of the model
},{
    timestamps : true,
    toObject:{
        transform:function(doc,ret,options){
            ret.id = ret._id;
            delete ret._id;
            delete ret.password;
            delete ret.__v;
            return ret;
        }
    }
});
module.exports = mongoose.model("User" , userSchema);