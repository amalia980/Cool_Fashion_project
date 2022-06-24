const mongoose = require('mongoose')

const OrderSchema = mongoose.Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  telephone: {
    type: Number,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  zipcode: {
    type: Number,
    required: true,
  },
  products: [
    {
      _id: {
        type: String,
        required: true
      },
      title: {
        type: String,
        required: true
      },
      price: {
        type: String,
        required: true
      },
      quantity: {
        type: String,
        required: true
      }
    }
  ],
  //only for admin to check if the submitted orders are handled or not
  handled: {
    type: Boolean,
  }
})

module.exports = mongoose.model('Order', OrderSchema)
