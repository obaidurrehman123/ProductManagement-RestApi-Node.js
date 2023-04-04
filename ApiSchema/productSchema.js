const joi = require("@hapi/joi");
module.exports.createProduct=joi.object().keys({
  name:joi.string().required(),
  price:joi.number().required(),
  brand:joi.string().required() 
});
module.exports.getAllProducts = joi.object().keys({
  skip : joi.string(),
  limit : joi.string()
});
module.exports.updateProductSchema = joi.object().keys({
  name:joi.string(),
  price:joi.number(),
  brand:joi.string() 
});