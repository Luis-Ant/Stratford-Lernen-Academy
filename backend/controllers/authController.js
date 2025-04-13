// Este controlador se encarga de manejar las solicitudes relacionadas con la autenticación de usuarios.
import authService from "../services/authService.js";
import jwt from "jsonwebtoken";

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
      const { email, password } = req.body;
      const { accessToken, refreshToken, user } = await authService.login(
        email,
        password
      );
      res
        .status(200)
        .json({ message: "Login exitoso", accessToken, refreshToken, user });
    } catch (error) {
      res.status(401).json({ error: error.message });
    }
  },

  // Metodo para refrescar el accessToken
  async refreshToken(req, res) {
    try {
      const { refreshToken } = req.body;
      if (!refreshToken) {
        return res.status(400).json({ error: "Refresh token es requerido" });
      }

      const decoded = authService.verifyRefreshToken(refreshToken);
      const accessToken = jwt.sign(
        { id: decoded.id },
        process.env.JWT_SECRET,
        { expiresIn: "15m" } // Generar un nuevo access token
      );

      res.status(200).json({ accessToken });
    } catch (error) {
      res.status(403).json({ error: "Refresh token inválido o expirado" });
    }
  },

  // Método para verificar el token
  async verify(req, res) {
    try {
      const token = req.headers.authorization.split(" ")[1];
      const decoded = authService.verifyToken(token);
      res.status(200).json({ decoded });
    } catch (error) {
      res.status(401).json({ error: "Token inválido" });
    }
  },
};

export default authController;
