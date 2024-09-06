// routers/user.js
const express = require('express');
const router = express.Router();
const User = require('../models/user');

// Tüm kullanıcıları getirme
router.get('/', async (req, res) => {
  try {
    const users = await User.find();
    console.log("Backend: Users retrieved successfully", users); // Log retrieved users
    console.log("ersin");
    res.json(users);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;