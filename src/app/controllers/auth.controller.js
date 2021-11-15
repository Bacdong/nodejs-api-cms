const User = require('../models/user.model')
const { ApiResponse } = require('../core/utils/api-response.util')
class AuthController {
  /**
   * [GET] /auth
   * @param {*} req
   * @param {*} res
   * @returns profile
   */
  index(req, res, next) {
    User.findOne({ slug: req.params.slug })
      .then(data => res.json(ApiResponse(data)))
      .catch(next)
  }

  /**
   * [POST] /auth/login 
   * @param {*} req 
   * @param {*} res 
   * @returns tokens
   */
  login(req, res) {
    res.json('Auth Login Controller')
  }

  /**
   * [POST] /auth/register 
   * @param {*} req 
   * @param {*} res 
   * @returns tokens
   */
   register(req, res) {
    res.json('Auth Register Controller')
  }

  /**
   * [POST] /auth/logout 
   * @param {*} req 
   * @param {*} res 
   * @returns tokens
   */
   logout(req, res) {
    res.json('Auth Logout Controller')
  }
}

module.exports = new AuthController
