// Logica de negocio para la autenticacion, registro, inicio de sesion y verificacion de tokens.
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { Usuario } = require("../config/database");

const authService = {
  async register(data) {
    const hashedPassword = await bcrypt.hash(data.contraseña, 10);
    return Usuario.create({ ...data, contraseña: hashedPassword });
  },

  async login(usuarioTag, contraseña) {
    const user = await Usuario.findOne({ where: { usuarioTag } });
    if (!user) throw new Error("Usuario no encontrado");

    const isPasswordValid = await bcrypt.compare(contraseña, user.contraseña);
    if (!isPasswordValid) throw new Error("Contraseña incorrecta");

    const token = jwt.sign(
      { id: user.idUsuario, tipoUsuario: user.tipoUsuario },
      process.env.JWT_SECRET,
      {
        expiresIn: "1h",
      }
    );

    return { token, user };
  },

  verifyToken(token) {
    return jwt.verify(token, process.env.JWT_SECRET);
  },
};

module.exports = authService;
