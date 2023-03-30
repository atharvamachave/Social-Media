const jwt = require('jsonwebtoken');

exports.authUser = async (req, res, next) => {
  try {
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
