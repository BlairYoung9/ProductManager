const mongoose = require("mongoose");


//Schema with product title, price, and description
const ProductSchema = new mongoose.Schema({
    title:{
        type: String,
        required: [true, "{PATH} must be present"],
        minlength: [2, "{PATH} must be 2 chars long"]
    },
    price:{
        type: String,
        required: [true, "{PATH} must be present"],
        minlength: [1, "{PATH} must be 1 chars long"]
    },
    description:{
        type: String,
        required: [true, "{PATH} must be present"],
        minlength: [2, "{PATH} must be 2 chars long"]
    }
}, {timestamps: true})

const Product = mongoose.model("Product", ProductSchema)
module.exports = Product;