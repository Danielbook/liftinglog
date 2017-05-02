/**
 * Created by Daniel on 2017-04-13.
 */
const jwt = require('jsonwebtoken');
const User = require('mongoose').model('User');
import config from "../config";


/**
 *  The Auth Checker middleware function.
 */
module.exports = (req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(401).end();
  }

  // console.log(req.session);

  // get the last part from a authorization header string like "bearer token-value"
  const token = req.headers.authorization.split(' ')[1];

  // decode the token using a secret key-phrase
  return jwt.verify(token, config.jwtSecret, (err, decoded) => {
    // the 401 code is for unauthorized status
    if (err) {
      return res.status(401).end();
    }

    const userId = decoded.sub;

    // check if a user exists
    return User.findById(userId, (userErr, user) => {
      if (userErr || !user) {
        return res.status(401).end();
      } else {
        req.session.currentUserID = user._id;
        req.session.currentUserName = user.name;
        req.session.currentUserEmail = user.email;
        return next();
      }
    });
  });
};
