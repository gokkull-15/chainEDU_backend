const express = require("express");
const router = express.Router();
const { signup, login, dashboard, } = require("../controllers/authController");
const authenticateJWT = require("../middleware/auth");

// Authentication Routes
router.post("/signup", signup);
router.post("/login", login);
router.get("/dashboard", authenticateJWT, dashboard);

module.exports = router;
