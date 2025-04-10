// Middlewares para proteger rutas
const jwt = require("jsona validaciones, autenticación y autorizaciónwebtoken");

const authMiddleware = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ error: "Acceso no autorizado" });
  }
};

module.exports = authMiddleware;
