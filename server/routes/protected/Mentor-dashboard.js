const express = require('express');
const router = express.Router();
const { protect, Mentor_only } = require('../../middleware/auth');
const Internship = require('../../models/allmodels'); // your schema file

// ✅ Mentor dashboard route to get pending internships
router.get('/mentor-dashboard', protect, Mentor_only, async (req, res) => {
  try {
    // Fetch all internships where isApproved is false
    const pendingInternships = await Internship.find({ isApproved: false });
    res.json({ internships: pendingInternships });
  } catch (err) {
    console.error('Error fetching mentor dashboard data:', err);
    res.status(500).json({ message: 'Server Error' });
  }
});

// ✅ Mentor approves a student's internship
router.post('/approve/:internshipId', protect, Mentor_only, async (req, res) => {
  try {
    const { internshipId } = req.params;

    const internship = await Internship.findById(internshipId);

    if (!internship) {
      return res.status(404).json({ message: 'Internship not found' });
    }

    internship.isApproved = true;
    await internship.save();

    res.json({ message: 'Internship approved successfully!' });
  } catch (err) {
    console.error('Error approving internship:', err);
    res.status(500).json({ message: 'Server Error' });
  }
});

// (Optional) ✅ Mentor rejects a student's internship (deletes entry)
router.delete('/reject/:internshipId', protect, Mentor_only, async (req, res) => {
  try {
    const { internshipId } = req.params;

    const internship = await Internship.findById(internshipId);

    if (!internship) {
      return res.status(404).json({ message: 'Internship not found' });
    }

    await Internship.findByIdAndDelete(internshipId);

    res.json({ message: 'Internship rejected and deleted successfully!' });
  } catch (err) {
    console.error('Error rejecting internship:', err);
    res.status(500).json({ message: 'Server Error' });
  }
});

module.exports = router;
