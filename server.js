// server.js
require("dotenv").config();
const express = require("express");
const connectDB = require("./controllers/connect_db");

const userRoutes = require("./routes/userRoutes");

const app = express();

// Middlewares
app.use(express.json()); // Permite el análisis de JSON

// Conexión a MongoDB
connectDB();

// Rutas
app.use("/users", userRoutes);

// Servidor en escucha
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor funcionando en http://localhost:${PORT}`);
});
