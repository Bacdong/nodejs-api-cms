const Product = require('../models/product.model')
const { ApiResponse } = require('../core/utils/api-response.util')

class ProductController {

  /**
   * [GET] /product
   * @param {*} res 
   * @param {*} req 
   * @returns products
   */
  index(req, res, next) {
    Product.find({})
      .then(data => res.json(ApiResponse(data, true, 200)))
      .catch(next)
  }

  /**
   * [GET] /product/:slug
   * @param {*} req 
   * @param {*} res 
   * @returns product
   */
  productDetail(req, res, next) {
    Product.findOne({ slug: req.params.slug })
      .then(data => res.json(ApiResponse(data, true, 200)))
      .catch(next)
  }
}

module.exports = new ProductController
