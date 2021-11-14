const mongoose = require('mongoose')
const Schema = mongoose.Schema
const slug = require('mongoose-slug-generator')

const Product = require('./product.model')

mongoose.plugin(slug)

const Order = new Schema({
  name: { type: String, maxLength: 128, required: true },
  slug: { type: String, maxLength: 128, slug: 'name', unique: true },
  lines: { type: Schema.Types.ObjectId, ref: 'OrderLine' },
  code: { type: String, maxLength: 128, default: `DH${_id}` },
  total: { type: Number, maxLength: 128 },
  isCompleted: { type: Boolean, default: false },
}, { timestamps: true })

const OrderLine = new Schema({
  product: { type: Schema.Types.ObjectId, ref: 'Product', required: true },
  quantity: { type: Number, default: 1 },
  price: { type: Number },
  subtotal: { type: Number, defaul: (quantity * price) }
})

module.exports = mongoose.model('OrderLine', OrderLine)
module.exports = mongoose.model('Order', Order)
