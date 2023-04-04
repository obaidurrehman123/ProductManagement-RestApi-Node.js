const mongoose = require("mongoose");
const productSchema = new mongoose.Schema({
    name:String,
    price:Number,
    brand:String
    // if you want to add the date related information of the model
},{
    timestamps : true,
    toObject:{
        transform:function(doc,ret,options){
            ret.id = ret._id;
            delete ret._id;
            delete ret.__v;
            return ret;
        }
    }
});
module.exports = mongoose.model("Product" , productSchema);