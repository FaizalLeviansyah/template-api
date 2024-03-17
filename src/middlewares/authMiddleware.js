const jwt = require('jsonwebtoken');
const response = require('../tools/response');

const secretKey = process.env.JWT_SECRET;

const verifyToken = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return response(req, res, {
      status: 401,
      message: 'Unauthorized - Token not provided'
    });
  }

  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      return response(req, res, {
        status: 401,
        message: 'Unauthorized - Invalid token'
      });
    }

    req.user = decoded;
    next();
  });
};

module.exports = {
  verifyToken,
};
