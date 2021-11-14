const Category = require('../models/category.model')
const { ApiResponse } = require('../core/utils/api-response.util')

class CategoryController {

  /**
   * [GET] /category
   * @param {*} res 
   * @param {*} req 
   * @returns categories
   */
  index(req, res, next) {
    Category.find({})
      .then(data => res.json(ApiResponse(data, true, 200)))
      .catch(next)
  }

  /**
   * [GET] /category/:slug
   * @param {*} req 
   * @param {*} res 
   * @returns category
   */
  categoryDetail(req, res, next) {
    Category.findOne({ slug: req.params.slug })
      .then(data => res.json(ApiResponse(data, true, 200)))
      .catch(next)
  }
}

module.exports = new CategoryController
