const express = require("express");
const router = express.Router();

router.get("/", function (req, res, next) {
  res.render("signup");
});

router.post("/confirmation", function (req, res, next) {
  // TODO
  // Send confirmation email
  res.render("signup-confirmation");
});

module.exports = router;
