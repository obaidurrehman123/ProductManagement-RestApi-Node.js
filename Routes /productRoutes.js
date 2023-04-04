const express = require("express");
const joiSchemaValidation = require("../middleware/joiSchemaValidation");
const productSchema = require("../ApiSchema/productSchema");
const router = express.Router();
const productController = require("../Controller/productController");
router.post("/",
joiSchemaValidation.validateBody(productSchema.createProduct)
,productController.createProduct);
router.get("/:id" ,productController.getProductById)
router.get("/",
joiSchemaValidation.validateQueryParams(productSchema.getAllProducts)
,productController.GetAllProducts);
module.exports =router;
router.put("/:id",joiSchemaValidation.validateBody(productSchema.updateProductSchema),
productController.updateProduct);
router.delete("/:id",productController.deleteById);