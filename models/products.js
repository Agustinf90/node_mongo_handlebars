const mongoose = require('mongoose')

const orderCollection = 'products'

const orderSchema = new mongoose.Schema({
  name: String,
  price: Number,
  quantity: Number,
})


const Products = mongoose.model(orderCollection, orderSchema)

module.exports = Products