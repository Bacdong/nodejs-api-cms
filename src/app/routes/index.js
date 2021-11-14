const authRouter = require('./auth.route')
const orderRouter = require('./order.route')
const productRouter = require('./product.route')
const categoryRouter = require('./category.route')

const routes = (app) => {
  app.use('/auth', authRouter)
  app.use('/order', orderRouter)
  app.use('/product', productRouter)
  app.use('/category', categoryRouter)
}

module.exports = routes