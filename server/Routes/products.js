import express from "express";
import { createProduct, updateProduct, deleteProduct, getProduct, getProductByCategory } from "../Controllers/Products.js";

const router = express.Router();

//CREATE
router.post("/create", createProduct);

//UPDATE
router.put("/update/:id", updateProduct);

//DELETE
router.delete("/delete/:id", deleteProduct);

//GET
router.get("/getproduct/:id", getProduct);

router.post("/productbycategory", getProductByCategory);



export default router;