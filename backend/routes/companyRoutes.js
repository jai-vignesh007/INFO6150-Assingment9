// routes/companyRoutes.js
const express = require('express');
const router = express.Router();
const Company = require('../models/company');
const path = require('path');
const fs = require('fs');

// Upload company name + image
router.post('/companies/upload', async (req, res) => {
  const { name } = req.body;

  if (!req.files || !req.files.image) {
    return res.status(400).json({ error: 'No image uploaded.' });
  }

  try {
    const image = req.files.image;
    const filename = `${Date.now()}-${image.name.replace(/\s/g, '')}`;
    const uploadPath = path.join(__dirname, '../images', filename);

    image.mv(uploadPath, async (err) => {
      if (err) return res.status(500).json({ error: 'File upload failed' });

      const imagePath = `/images/${filename}`;
      const newCompany = new Company({ name, imagePath });
      await newCompany.save();

      res.status(201).json({ message: 'Company uploaded successfully.', company: newCompany });
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Fetch all companies
router.get('/companies', async (req, res) => {
  try {
    const companies = await Company.find();
    res.json(companies);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch companies' });
  }
});

module.exports = router;
