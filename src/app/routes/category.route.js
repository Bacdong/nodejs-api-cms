const express = require('express')
const router = express.Router()

const categoryController = require('../controllers/category.controller')

router.get('/:slug', categoryController.categoryDetail)
router.get('/', categoryController.index)

module.exports = router