const joi = require("@hapi/joi");
module.exports.signUp = joi.object().keys({
    email:joi.string().required(),
    password:joi.string().required()
});
module.exports.signIn = joi.object().keys({
    email:joi.string().required(),
    password:joi.string().required()
});