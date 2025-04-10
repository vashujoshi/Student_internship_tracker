const express = require('express');
const router = express.Router();
const { protect, ccpdOnly } = require('../../middleware/auth'); // ✅ Import correctly

router.get('/ccpd-dashboard', protect, ccpdOnly, (req, res) => {
  res.json({ message: 'Welcome to the CCPD dashboard!' });
});

module.exports = router;
