const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema({
  title: String,
  imageURL: String,
  price: Number,
  rating: Number,
});

const Product=mongoose.model("products", ProductSchema)

module.exports = Product;
