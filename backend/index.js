require("dotenv").config();
const express = require("express");
const cors = require("cors");
const authRoutes = require("./routes/authRoutes");
const app = express();
const port = process.env.PORT || 3001;

// Configurar CORS para permitir solicitudes desde el frontend
app.use(
  cors({
    origin: "http://localhost:3000", // Permite solicitudes desde este origen
    methods: ["GET", "POST", "PUT", "DELETE"], // Métodos HTTP permitidos
    credentials: true, // Si necesitas enviar cookies o encabezados de autenticación
  })
);

app.use(express.json());

// Agregar las rutas de autenticación
app.use("/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("¡El servidor está funcionando!");
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});

// Actualiza la base de datos y los modelos.
// const db = require("./config/database");

// db.sequelize
//   .sync({ alter: true }) // Sincroniza los modelos con la base de datos
//   .then(() => {
//     console.log("¡Modelos sincronizados con la base de datos!");
//   })
//   .catch((err) => {
//     console.error("Error al sincronizar los modelos:", err);
//   });
