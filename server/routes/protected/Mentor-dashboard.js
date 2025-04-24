const express = require('express');
const router = express.Router();
const { protect, Mentor_only } = require('../../middleware/auth'); // ✅ Import correctly

router.get('/mentor-dashboard', protect, Mentor_only, (req, res) => {
  res.json({ message: 'Welcome to the mentor dashboard!' });
});

module.exports = router;
