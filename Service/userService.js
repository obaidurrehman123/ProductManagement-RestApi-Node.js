const User = require("../database/models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const {formateMongoData} = require("../Helper/dbHelper");
const { use } = require("../Routes /productRoutes");
module.exports.signUp = async ({email,password})=>{
    try{
        const user = await User.findOne({email});
        if(user){
            throw new Error("User Already Found");
        }
        password =  await bcrypt.hash(password,12);
        const newUser = await new User({email,password});
        let result = await newUser.save();
        return formateMongoData(result);
     }catch(error){
         throw new Error(error);
     }
}
module.exports.signIn = async ({email,password})=>{
    try{
        const user = await User.findOne({email});
        if(!user){
            throw new Error("User Not Found");
        }
        let isValid = bcrypt.compare(password , user.password);
        if(!isValid){
            throw new Error("Your password is invalid");
        }
        const token = jwt.sign({id:user._id} ,process.env.SECRET_KEY || "my-secret-key",{expiresIn :"1d"});
        return {token};
     }catch(error){
         throw new Error(error);
     }
}