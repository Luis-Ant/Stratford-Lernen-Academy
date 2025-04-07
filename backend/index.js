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
