const boom = require('@hapi/boom');
const { config } = require('./../config/config');

function checkApiKey(req, res, next) {
  const apiKey = req.headers['api-key'];
  if (apiKey === config.apiKey) {
    next();
  } else {
    next(boom.unauthorized('UNAUTHORIZED'));
  }
}

function checkRoles(...roles) {
  return (req, res, next) => {
    const user = req.user;
    if (roles.includes(user.role)) {
      next();
    } else {
      next(boom.unauthorized('UNAUTHORIZED'));
    }
  }
}

module.exports = { checkApiKey, checkRoles }