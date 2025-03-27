// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const userController = require('../controllers/userController');
const multer = require('multer');
const path = require('path');

// Configure Multer for image uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'images'),
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    cb(null, file.fieldname + '-' + Date.now() + ext);
  },
});
const upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    const allowedFormats = /jpeg|jpg|png|gif/;
    const ext = path.extname(file.originalname).toLowerCase();
    if (!allowedFormats.test(ext)) {
      return cb(new Error('Invalid file format. Only JPEG, PNG, and GIF are allowed.'));
    }
    cb(null, true);
  },
});

// User Creation Route
router.post(
  "/user",
  [
    body('fullName')
      .exists().withMessage('Full Name is required')
      .matches(/^[A-Za-z\s]+$/).withMessage('Full name must contain only alphabetic characters.'),
    body('email').isEmail().withMessage('Invalid email format.'),
    body('password')
      .isLength({ min: 8 }).withMessage('Password must be at least 8 characters long.')
      .matches(/(?=.*[a-z])/, 'i').withMessage('Password must contain at least one lowercase letter.')
      .matches(/(?=.*[A-Z])/, 'i').withMessage('Password must contain at least one uppercase letter.')
      .matches(/(?=.*\d)/).withMessage('Password must contain at least one digit.')
      .matches(/(?=.*[@$!%*?&])/).withMessage('Password must contain at least one special character.'),
  ],
  userController.createUser
);

// Update User Details Route
router.put(
  '/user/edit',
  [
    body('email').isEmail().withMessage('Valid email is required to identify the user.'),
    body('fullName')
      .optional()
      .matches(/^[A-Za-z\s]+$/).withMessage('Full name must contain only alphabetic characters.'),
    body('password')
      .optional()
      .isLength({ min: 8 }).withMessage('Password must be at least 8 characters long.')
      .matches(/(?=.*[a-z])/, 'i').withMessage('Password must contain at least one lowercase letter.')
      .matches(/(?=.*[A-Z])/, 'i').withMessage('Password must contain at least one uppercase letter.')
      .matches(/(?=.*\d)/).withMessage('Password must contain at least one digit.')
      .matches(/(?=.*[@$!%*?&])/).withMessage('Password must contain at least one special character.'),
  ],
  userController.updateUser
);

// Delete User Route
router.delete('/user/:email', userController.deleteUser);

// Retrieve All Users Route
router.get('/user/getUser', userController.getAllUsers);

// Upload Image Route
//router.post('/user/uploadImage', upload.single('image'), userController.uploadImage);
router.post('/user/uploadImage', (req, res, next) => {
  upload.single('image')(req, res, (err) => {
    if (err) {
      // If Multer throws an error, return a 400 with the error message.
      return res.status(400).json({ error: err.message });
    }
    // Otherwise, proceed to the controller
    userController.uploadImage(req, res, next);
  });
});

router.post('/login', userController.loginUser);
module.exports = router;
