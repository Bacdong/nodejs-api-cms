const mongoose = require('mongoose')
const constants = require('../constants')

const dbConnect = async () => {
  try {
    await mongoose.connect(`${constants.dbName}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }) 
    console.log('Database connected!!!')
  } catch (error) {
    console.log('Database failed!!!', error)
  } 
}

module.exports = { dbConnect }
