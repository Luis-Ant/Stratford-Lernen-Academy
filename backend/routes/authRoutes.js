// Rutas para registro, login y verificación de token
const express = require("express");
const authController = require("../controllers/authController");
const router = express.Router();

router.post("/register", authController.register);
router.post("/login", authController.login);
router.post("/refreshToken", authController.refreshToken);
router.get("/verify", authController.verify);

module.exports = router;
