const userService = require("../Service/userService")
module.exports.signUp = async (req , res)=>{
    //res.send("Product Created Successfully");
    let response={};
    try{
    console.log("===" , req.body);
    const responseService =  await userService.signUp(req.body);
    response.status = 200;
    response.message = "User Created Successfully";
    response.body = responseService;
    }catch (error){
        throw new Error(error);
        console.log("Something Went Wrong With the Controller : " + error);
        response.message = error.message;
        response.body = {};
    } 
    return res.status(response.status).send(response);
}
module.exports.signIn = async (req , res)=>{
    //res.send("Product Created Successfully");
    let response={};
    try{
    console.log("===" , req.body);
    const responseService =  await userService.signIn(req.body);
    response.status = 200;
    response.message = "User Created Successfully";
    response.body = responseService;
    }catch (error){
        throw new Error(error);
        console.log("Something Went Wrong With the Controller : " + error);
        response.message = error.message;
        response.body = {};
    } 
    return res.status(response.status).send(response);
}