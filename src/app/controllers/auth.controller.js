class AuthController {
  /**
   * [GET] /auth
   * @param {*} req
   * @param {*} res
   * @returns profile
   */
  index(req, res) {
    res.json('Auth Profile Controller')
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
