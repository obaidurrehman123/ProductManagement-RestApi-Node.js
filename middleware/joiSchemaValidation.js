const joi = require("@hapi/joi");
let response={};
const validateObjectSchema = (data,schema)=>{
const result = schema.validate(data,{convert:false});
//console.log("==="  , result.error.details);
if(result.error){
const errorDetails = result.error.details.map(value=>{
    return {
        error:value.message,
        path:value.path
    }
});
return errorDetails;
}
return null;
}
module.exports.validateBody = (schema) => {
    return (req , res , next) =>{
    const error = validateObjectSchema(req.body , schema);
    if(error){
     response.body = error;
     response.message = "Invalue Entered Field";
     return res.send(response);    
    }
    return next();
    }
}
module.exports.validateQueryParams = (schema) => {
    return (req , res , next) =>{
    const error = validateObjectSchema(req.query , schema);
    if(error){
     response.body = error;
     response.message = "Invalue Entered Field";
     return res.send(response);    
    }
    return next();
    }
}