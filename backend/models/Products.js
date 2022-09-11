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
  image: {
    data: Buffer,
    contentType: String
  }
});

module.exports = mongoose.model("Product", ProductSchema);