import ProductModel from "../Models/Products.js";

export const createProduct = async (req, res, next) => {
    const newProduct = new ProductModel(req.body);

    try {
        const savedProduct = await newProduct.save();
        res.status(200).json(savedProduct);
    } catch (err) {
        next(err);
    }
};


export const updateProduct = async (req, res, next) => {
    try {
        const updatedProduct = await ProductModel.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true }
        );
        res.status(200).json(updatedProduct);
    } catch (err) {
        next(err);
    }
};


export const deleteProduct = async (req, res, next) => {
    try {
        await ProductModel.findByIdAndDelete(req.params.id);
        res.status(200).json("Product has been deleted.");
    } catch (err) {
        next(err);
    }
};


export const getProduct = async (req, res, next) => {
    try {
        const product = await ProductModel.findById(req.params.id);
        if(product){
            res.status(200).json(product);
        }else{
            res.json({message: "No Such Product Exist !!!"});
        }
    } catch (err) {
        next(err);
    }
};


export const getProductByCategory = async (req, res, next) => {
    try {
        const  category = req.body;
        const products = await ProductModel.find({ Category: category.Category.toLowerCase() })
        if(products.length !== 0){
            res.json(products);
        }else{
            res.json({message:"No Such Category Exist !!!"})
        }
    } catch (error) {
        next(error);
    }
};
