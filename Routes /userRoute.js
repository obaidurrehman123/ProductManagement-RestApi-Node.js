const express = require("express");
const userController = require("../Controller/userController");
const joiSchemaValidation = require("../middleware/joiSchemaValidation");
const userSchema = require("../ApiSchema/userSchema")
const router = express.Router();

router.post("/signup",
joiSchemaValidation.validateBody(userSchema.signUp)
,userController.signUp)

router.post("/signin",
joiSchemaValidation.validateBody(userSchema.signIn),
userController.signIn)

module.exports = router;