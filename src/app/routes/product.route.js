const express = require('express')
const router = express.Router()

const productController = require('../controllers/product.controller')

router.get('/:slug', productController.productDetail)
router.get('/', productController.index)

module.exports = router