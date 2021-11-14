class OrderController {
  /**
   * [GET] /order
   * @param {*} req
   * @param {*} res
   * @returns orders
   */
  index(req, res) {
    res.json('Order Controller')
  }
}

module.exports = new OrderController
