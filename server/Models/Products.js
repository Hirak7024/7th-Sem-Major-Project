import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: true
    },
    Description: {
        type: String,
        required: true,
    },
    Image: {
        type: String,
        required: true,
    },
    Price: {
        type: Number,
        required: true,
    },
    Category: {
        type: String,
        required: true,
    }
},
    { timestamps: true }
)

export default mongoose.model("Product", ProductSchema);