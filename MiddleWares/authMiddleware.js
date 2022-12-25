const jwt = require("jsonwebtoken");

async function authMiddleware(req, res, next) {
  const token = req.cookies.jwt;

  try {
    if (token) {
      const decode = jwt.verify(token, process.env.secret);
      req.email = decode.email;
      next();
    } else {
      throw "Invalid token";
    }
  } catch (e) {
    res.status(400).json({ status: "400", msg: "Invalid token" });
  }
}

module.exports = authMiddleware