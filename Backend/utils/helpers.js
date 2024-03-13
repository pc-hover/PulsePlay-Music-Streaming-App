//Utils contains comman functions
exports = {};
require("dotenv").config();
const jwt = require("jsonwebtoken");

exports.getToken = async (email, user) => {
  const token = jwt.sign({ identifier: user._id }, process.env.SECRET_KEY);
  return token;
};

module.exports = exports;
