// controllers/userController.js
const { validationResult } = require('express-validator');
const userService = require('../services/userService');

const createUser = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ error: 'Validation failed.' });
  }
  try {
    const { fullName, email, password } = req.body;
    await userService.createUser({ fullName, email, password });
    console.log("creating user");
    res.status(201).json({ message: 'User created successfully.' });
  } catch (err) {
    res.status(400).json({ error: 'Validation failed.' });
  }
};

const updateUser = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ error: 'Validation failed.' });
  }
  try {
    const { email, fullName, password } = req.body;
    await userService.updateUser({ email, fullName, password });
    res.status(200).json({ message: 'User updated successfully.' });
  } catch (err) {
    if (err.message === 'User not found.') {
      res.status(404).json({ error: err.message });
    } else {
      res.status(400).json({ error: err.message });
    }
  }
};

const deleteUser = async (req, res) => {
  const { email } = req.params;
  if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
    return res.status(400).json({ error: 'A valid email is required.' });
  }
  try {
    await userService.deleteUser(email);
    res.status(200).json({ message: 'User deleted successfully.' });
  } catch (err) {
    if (err.message === 'User not found.') {
      res.status(404).json({ error: err.message });
    } else {
      res.status(400).json({ error: err.message });
    }
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await userService.getAllUsers();
    res.status(200).json({ users });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const uploadImage = async (req, res) => {
  const { email } = req.body;
  if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
    return res.status(400).json({ error: 'A valid email is required.' });
  }
  if (!req.file) {
    return res.status(400).json({ error: 'No image file provided.' });
  }
  try {
    await userService.uploadUserImage(email, req.file.path);
    res.status(201).json({
      message: 'Image uploaded successfully.',
    });
  } catch (err) {
    if (err.message === 'User not found.') {
      res.status(404).json({ error: err.message });
    } else if (err.message === 'Image already exists for this user.') {
      res.status(400).json({ error: err.message });
    } else {
      res.status(400).json({ error: err.message });
    }
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await userService.loginUser(email, password);
    res.status(200).json({ message: "Login successful.", user: { email: user.email, fullName: user.fullName } });
  } catch (err) {
    console.error('Login error:', err.message); 
    res.status(400).json({ error: err.message });
  }
};

module.exports = {
  createUser,
  updateUser,
  deleteUser,
  getAllUsers,
  uploadImage,
  loginUser
};
