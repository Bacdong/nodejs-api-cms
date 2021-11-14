class OrderController {
  /**
   * [GET] /order
   * @param {*} req
   * @param {*} res
   * @returns orders
   */
  index(req, res, next) {
    User.find({})
      .then(data => res.json(ApiResponse(data, true, 200)))
      .catch(next)
  }
}

module.exports = new OrderController
