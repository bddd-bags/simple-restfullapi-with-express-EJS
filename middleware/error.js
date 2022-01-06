function error(err, req, res, next) {
  if (err) {
    res.status(500).json({ status: "ERROR", message: err.message });
  }
  next();
}

module.exports = error;
