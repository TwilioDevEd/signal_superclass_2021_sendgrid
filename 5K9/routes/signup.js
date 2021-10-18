const express = require("express");
const router = express.Router();
const sendEmail = require("../controllers/sendEmail");

router.get("/", function (req, res, next) {
  res.render("signup");
});

router.post("/confirmation", function (req, res, next) {
  sendEmail(req.body.email, req.body);
  res.render("signup-confirmation");
});

module.exports = router;
