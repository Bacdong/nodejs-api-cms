const Category = require('../models/category.model')
const { ApiResponse } = require('../core/utils/api-response.util')
const { getPaginationPages } = require('../core/utils/pagination.util')

class CategoryController {

  /**
   * [GET] /category
   * @param {*} res 
   * @param {*} req 
   * @returns categories
   */
  index(req, res, next) {
    const pagination = getPaginationPages(120, 6, 12, 5)

    Category.find({})
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
   * [GET] /category/:slug
   * @param {*} req 
   * @param {*} res 
   * @returns category
   */
  categoryDetail(req, res, next) {
    Category.findOne({ slug: req.params.slug })
      .then(data => res.status(200).json({
        success: true,
        status_code: 200,
        data: ApiResponse(data),
      }))
      .catch(next)
  }
}

module.exports = new CategoryController
