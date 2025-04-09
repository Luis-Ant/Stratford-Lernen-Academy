const express = require("express");
const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("¡El servidor está funcionando!");
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});

// const db = require("./config/database");

// db.sequelize
//   .sync({ alter: true }) // Sincroniza los modelos con la base de datos
//   .then(() => {
//     console.log("¡Modelos sincronizados con la base de datos!");
//   })
//   .catch((err) => {
//     console.error("Error al sincronizar los modelos:", err);
//   });
