import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import ProductRoute from "./Routes/products.js"

const app = express();
app.use(express.json());
app.use(cors());

const PORT = 8000;
const MONGO_URL =  "mongodb://127.0.0.1:27017/Ecommerce-Application";

mongoose.connect(MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
.then(()=>console.log("Connected to MongoDB"))
.catch((err)=>console.log(err));

mongoose.connection.on("disconnected", ()=>{
    console.log("MongoDB disconnected");
})

app.get("/", (req,res)=>{res.send("This is the port for Ecommerce Web Application")})

//Routes 
app.use("/product", ProductRoute )

app.listen(PORT, ()=>console.log(`Server Running at PORT ${PORT}`));