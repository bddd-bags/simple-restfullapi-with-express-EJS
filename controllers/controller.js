const jwt = require("jsonwebtoken");
const user = require("../user.json");

const homePage = (req, res) => {
  res.render("index", { title: "Home Page", layout: "layouts/main" });
};

const gamePage = (req, res) => {
  res.render("game", { title: "Suit Game", layout: "layouts/main" });
};

const loginPage = (req, res) => {
  const { username, password } = req.body;
  const getUsers = { username, password };
  const getUser = user.find(
    (e) => e.username === getUsers.username && e.password === getUsers.password
  );

  if (getUser) {
    const ACCESS_TOKEN = jwt.sign(getUser, process.env.ACCESS_TOKEN);

    res
      .status(201)
      .header("user-token", ACCESS_TOKEN)
      .json({ status: "Success", ACCESS_TOKEN });
  } else {
    res.status(401).json({
      status: "Fail",
      message: "Username/Password yang anda masukkan salah",
    });
  }
};

const loginMe = (req, res) => {
  const getUser = req.getUser;
  res.status(201).json(getUser);
};

const serverError = (req, res) => {
  throw new Error("500 Internal Server Error");
};

const notFound = (req, res) => {
  res.status(404).json({
    status: "FAIL",
    data: {
      method: req.method,
      url: req.url,
    },
    message: "not found",
  });
};

module.exports = {
  homePage,
  gamePage,
  loginPage,
  loginMe,
  serverError,
  notFound,
};
