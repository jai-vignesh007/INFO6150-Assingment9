// services/userService.js
const User = require('../models/user');
const bcrypt = require('bcrypt');

const createUser = async ({ fullName, email, password }) => {
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = new User({ fullName, email, password: hashedPassword });
  return await user.save();
};

const updateUser = async ({ email, fullName, password }) => {
  const user = await User.findOne({ email });
  if (!user) {
    throw new Error('User not found.');
  }
  if (fullName) user.fullName = fullName;
  if (password) {
    user.password = await bcrypt.hash(password, 10);
  }
  return await user.save();
};

const deleteUser = async (email) => {
  const user = await User.findOneAndDelete({ email });
  if (!user) {
    throw new Error('User not found.');
  }
  return user;
};

const getAllUsers = async () => {
  return await User.find({}, 'fullName email password');
};

const uploadUserImage = async (email, imagePath) => {
  const user = await User.findOne({ email });
  if (!user) {
    throw new Error('User not found.');
  }
  if (user.imagePath) {
    throw new Error('Image already exists for this user.');
  }
  user.imagePath = imagePath;
  return await user.save();
};

const loginUser = async (email, password) => {
  const user = await User.findOne({ email });
  if (!user) {
    throw new Error('User not found.');
  }
  const match = await bcrypt.compare(password, user.password);
  if (!match) {
    throw new Error('Invalid credentials.');
  }
  // In a production app, you would generate a session or JWT token here.
  return user;
};

module.exports = {
  createUser,
  updateUser,
  deleteUser,
  getAllUsers,
  uploadUserImage,
  loginUser
};
