const mongoose = require('mongoose')
const Schema = mongoose.Schema

const User = new Schema({
  username: { type: String, maxLength: 128, required: true },
  fullName: { type: String, maxLength: 128 },
  phone: { type: String, maxLength: 12 },
  email: { type: String, maxLength: 128 },
  isActived: { type: Boolean, default: true },
  isCustomer: { type: Boolean, default: true },
  isAdmin: { type: Boolean, default: false },
}, { timestamps: true })

module.exports = mongoose.model('User', User)
