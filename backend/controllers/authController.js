// Metodos de login, registro, logout y verificacion de token
const authService = require("../services/authService");

const authController = {
  // Método para registrar un nuevo usuario
  async register(req, res) {
    try {
      const user = await authService.register(req.body);
      res.status(201).json({ message: "Usuario registrado con éxito", user });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  // Método para iniciar sesión
  async login(req, res) {
    try {
      const { usuarioTag, contraseña } = req.body;
      const { token, user } = await authService.login(usuarioTag, contraseña);
      res.status(200).json({ token, user });
    } catch (error) {
      res.status(401).json({ error: error.message });
    }
  },

  // Método para verificar el token
  verify(req, res) {
    try {
      const token = req.headers.authorization.split(" ")[1];
      const decoded = authService.verifyToken(token);
      res.status(200).json({ decoded });
    } catch (error) {
      res.status(401).json({ error: "Token inválido" });
    }
  },
};

module.exports = authController;
