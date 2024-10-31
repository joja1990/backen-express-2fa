// controllers/userController.js
const User = require("../models/User");

// Controlador para crear un nuevo usuario
exports.createUser = async (req, res) => {
  try {
    const { email, password, secret } = req.body;
    const user = new User({ email, password, secret });
    await user.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Controlador para obtener todos los usuarios
exports.getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
