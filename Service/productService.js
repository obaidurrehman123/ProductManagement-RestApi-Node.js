const Product = require("../database/models/productModel")
const mongoose = require("mongoose");
const {formateMongoData} = require("../Helper/dbHelper")
 module.exports.createProduct =async (serviceData)=>{
 try{
    let product = new Product({...serviceData});
    let result = await product.save();
    return formateMongoData(result);
 }catch(error){
     throw new Error(error);
 }
}
module.exports.GetAllProducts =async ({skip=0,limit=10})=>{
    try{
       //let product = new Product({...serviceData});
       let product = await Product.find({}).skip(parseInt(skip)).limit(parseInt(limit));
       return formateMongoData(product);
       //return result.toObject();
    }catch(error){
        throw new Error(error);
    }
   }
   module.exports.getProductById =async ({id , updateInfo})=>{
    try{
       //let product = new Product({...serviceData});
       //let product = await Product.find({}).skip(parseInt(skip)).limit(parseInt(limit));
       if(!mongoose.Types.ObjectId.isValid(id)){
         throw new Error("Invalid Id");
       }
       let product = await Product.findById(id);
       if(product==null){
        throw new Error("id not found");
       }
       return formateMongoData(product);
       //return result.toObject();
    }catch(error){
        throw new Error(error);
    }
   }
   module.exports.updateProduct =async ({id , updateInfo})=>{
    try{
       //let product = new Product({...serviceData});
       //let product = await Product.find({}).skip(parseInt(skip)).limit(parseInt(limit));
       if(!mongoose.Types.ObjectId.isValid(id)){
         throw new Error("Invalid Id");
       }
       let product = await Product.findOneAndUpdate(
        {_id:id},
        updateInfo,
        {new:true});
       if(product==null){
        throw new Error("id not found");
       }
       return formateMongoData(product);
       //return result.toObject();
    }catch(error){
        throw new Error(error);
    }
   }
   module.exports.deleteById =async ({id})=>{
    try{
       //let product = new Product({...serviceData});
       //let product = await Product.find({}).skip(parseInt(skip)).limit(parseInt(limit));
       if(!mongoose.Types.ObjectId.isValid(id)){
         throw new Error("Invalid Id");
       }
       let product = await Product.findByIdAndDelete(id);
       if(product==null){
        throw new Error("id not found");
       }
       return formateMongoData(product);
       //return result.toObject();
    }catch(error){
        throw new Error(error);
    }
   }
