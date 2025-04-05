const express = require('express');
const router = express.Router();
const {
  submitInternship,
  getAllInternships,
  getInternshipById,
  deleteInternship,
  updateInternship
} = require('../controllers/all_controller');

router.get('/', (req, res) => {
  res.send('Welcome to the Internship API!');
} );

// Route to handle form submission
router.post('/submit', submitInternship);

// Get all student internship records
router.get('/getAll', getAllInternships);

// Get a single record by ID
router.get('/get/:id', getInternshipById);

// Delete record
router.delete('/delete/:id', deleteInternship);

// Update record
router.put('/update/:id', updateInternship);

module.exports = router;
