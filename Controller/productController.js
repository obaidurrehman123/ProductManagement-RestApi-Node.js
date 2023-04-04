const productService = require("../Service/productService")
module.exports.createProduct = async (req , res)=>{
    //res.send("Product Created Successfully");
    let response={};
    try{
    console.log("===" , req.body);
    const responseService =  await productService.createProduct(req.body);
    response.status = 200;
    response.message = "Product Created Successfully";
    response.body = responseService;
    }catch (error){
        throw new Error(error);
        console.log("Something Went Wrong With the Controller : " + error);
        response.message = error.message;
        response.body = {};
    } 
    return res.status(response.status).send(response);
}
module.exports.GetAllProducts = async (req , res)=>{
    //res.send("Product Created Successfully");
    let response={};
    try{
    //console.log("===" , req.body);
    const responseService =  await productService.GetAllProducts(req.query);
    response.status = 200;
    response.message = "Product Fetched Successfully";
    response.body = responseService;
    }catch (error){
        throw new Error(error);
        console.log("Something Went Wrong With the Controller : productFetched " + error);
        response.message = error.message;
        response.body = {};
    } 
    return res.status(response.status).send(response);
}
module.exports.getProductById = async (req , res)=>{
    //res.send("Product Created Successfully");
    let response={};
    try{
    //console.log("===" , req.body);
    const responseService =  await productService.getProductById(req.params);
    response.status = 200;
    response.message = "Product Fetched Successfully";
    response.body = responseService;
    }catch (error){
        throw new Error(error);
        console.log("Something Went Wrong With the Controller : productFetched " + error);
        response.message = error.message;
        response.body = {};
    } 
    return res.status(response.status).send(response);
}
module.exports.updateProduct = async (req , res)=>{
    //res.send("Product Created Successfully");
    let response={};
    try{
    //console.log("===" , req.body);
    const responseService =  await productService.updateProduct({
        id:req.params.id,
        updateInfo : req.body
    });
    response.status = 200;
    response.message = "Product Updated Successfully";
    response.body = responseService;
    }catch (error){
        throw new Error(error);
        console.log("Something Went Wrong With the Controller : productFetched " + error);
        response.message = error.message;
        response.body = {};
    } 
    return res.status(response.status).send(response);
}
module.exports.deleteById = async (req , res)=>{
    //res.send("Product Created Successfully");
    let response={};
    try{
    //console.log("===" , req.body);
    const responseService =  await productService.deleteById(req.params);
    response.status = 200;
    response.message = "Product Deleted Successfully";
    response.body = responseService;
    }catch (error){
        throw new Error(error);
        console.log("Something Went Wrong With the Controller : productFetched " + error);
        response.message = error.message;
        response.body = {};
    } 
    return res.status(response.status).send(response);
}

