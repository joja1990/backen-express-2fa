// routes/userRoutes.js
const express = require("express");
const { createUser, getUsers } = require("../controllers/userController");

const router = express.Router();

// Ruta para crear un nuevo usuario
router.post("/", createUser);

// Ruta para obtener todos los usuarios
router.get("/", getUsers);

module.exports = router;
