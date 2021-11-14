const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Category = require('./category.model')
const slug = require('mongoose-slug-generator')

mongoose.plugin(slug)

const Product = new Schema({
  name: { type: String, maxLength: 128, required: true },
  slug: { type: String, maxLength: 128, slug: 'name', unique: true },
  category: { type: Schema.Types.ObjectId, ref: 'Category', required: true },
  isPublished: Boolean,
}, { timestamps: true })

module.exports = mongoose.model('Product', Product)
