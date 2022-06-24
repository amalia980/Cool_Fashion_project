const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema({
  category: {
    type: String,
   // required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description:{
      type:String,
  },
  price:{
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Product", ProductSchema);