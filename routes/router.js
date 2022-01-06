const express = require("express");
const {
  homePage,
  gamePage,
  loginPage,
  loginMe,
  serverError,
  notFound,
} = require("../controllers/controller");
const router = express.Router();
const authenticateToken = require("../middleware/auth");

router.get("/", homePage);
router.get("/game", gamePage);
router.post("/api/login", loginPage);
router.get("/api/me", authenticateToken, loginMe);
router.all("/internal-server-error", serverError);
router.use("/", notFound);
router.use(require("../middleware/error"));

module.exports = router;
