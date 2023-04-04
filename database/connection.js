const mongoose = require('mongoose');
mongoose.set("strictQuery", false);
module.exports =  ()=> {
 try{
  mongoose.connect(process.env.DB_URL, {useNewUrlParser: true});
  console.log("Db connected Successfully" + process.env.DB_URL);
 }
 catch(error){
    console.log("Database Connectivity Error");
    throw new Error(error);
 }
}
