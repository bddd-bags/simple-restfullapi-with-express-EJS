const jwt = require("jsonwebtoken");

function authenticateToken(req, res, next) {
  const getToken = req.headers.authorization;

  if (getToken == null)
    return res.status(401).json({
      status: "Fail",
      message: "Masukkan Authorization terlebih dahulu!",
    });

  jwt.verify(getToken, process.env.ACCESS_TOKEN, (err, getUser) => {
    if (err)
      return res.status(401).json({
        status: "Fail",
        message: "Token yang anda masukkan salah!",
      });
    req.getUser = getUser;
    next();
  });
}

module.exports = authenticateToken;
