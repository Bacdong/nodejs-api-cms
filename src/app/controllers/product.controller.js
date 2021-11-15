const Product = require('../models/product.model')
const { ApiResponse } = require('../core/utils/api-response.util')
const { getPaginationPages } = require('../core/utils/pagination.util')

class ProductController {

  /**
   * [GET] /product
   * @param {*} res 
   * @param {*} req 
   * @returns products
   */
  index(req, res, next) {
    const pagination = getPaginationPages(1, 1, 12, 5)

    Product.find({})
      .then(data => res.status(200).json({
        success: true,
        status_code: 200,
        data: {
          ...pagination,
          ...ApiResponse(data),
        },
      }))
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
      .then(data => res.status(200).json({ 
        success: true,
        status_code: 200,
        data: ApiResponse(data),
      }))
      .catch(next)
  }
}

module.exports = new ProductController
