const mongoose = require('mongoose')
const Schema = mongoose.Schema
const slug = require('mongoose-slug-generator');

mongoose.plugin(slug)

const Category = new Schema({
  name: { type: String, maxLength: 128, required: true },
  slug: { type: String, maxLength: 128, slug: 'name', unique: true },
  isPublished: Boolean,
}, { timestamps: true })

module.exports = mongoose.model('Category', Category)
