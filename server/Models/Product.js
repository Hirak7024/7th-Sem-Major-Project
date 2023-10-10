import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: true
    },
    Price: {
        type: Number,
        required: true
    },
    Description: {
        type: String,
        required: true
    },
    Category: {
        type: String,
        required: true
    },
    Color: {
        type: String
    },
    Brand: {
        type: String
    }
},
    { timeStamps: true }
)

const ProductModel = mongoose.model("product", ProductSchema);
export default ProductModel;