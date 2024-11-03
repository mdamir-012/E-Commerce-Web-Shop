// Schema for Creating Products
const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  id: { type: Number, required: true },
  name: { type: String, required: true },
  image: { type: String, required: true },
  category: { type: String, required: true },
  new_price: { type: Number, required: true },
  old_price: { type: Number, required: true },
  date: { type: Date, default: Date.now },
  avaialbale: { type:Boolean, default: true },
});

const productModel = mongoose.model("productdata", productSchema);

module.exports = { productModel };
