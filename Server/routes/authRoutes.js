const express = require("express");
const passport = require("passport");
const authController = require("../controllers/authControllers");
//const user = require("../models/User");
const router = express.Router();

router.post("/register", authController.register);
router.post("/login", authController.login);
router.post("/send-otp", authController.sendOTP);
router.post("/verify-otp", authController.verifyOTP);
router.get("/google", passport.authenticate("google", { scope: ["profile", "email"] }));
router.get("/google/callback", passport.authenticate("google", { failureRedirect: "/" }), (req, res) => {
  res.redirect("/dashboard");
});

module.exports = router;
