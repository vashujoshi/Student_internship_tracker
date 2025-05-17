const Internship = require('../models/allmodels');
const generatePDF = require('../utils/pdfgen'); // PDF generator function
const sendMailToMentor = require('../utils/sendmail'); // Email function
const { v4: uuidv4 } = require('uuid');
const fs = require('fs');

const submitInternship = async (req, res) => {
  try {
    const formData = req.body;

    console.log('Form Data:', formData); // Log the incoming form data

    // Step 1: Validate form data
    if (!formData.studentName || !formData.emailAddress || !formData.mentorEmail) {
      return res.status(400).json({ error: 'Missing required fields: studentName, emailAddress, or mentorEmail' });
    }

    // Step 2: Generate PDF
    // formData.duration = `${formData.duration.from} to ${formData.duration.to}`;

    let pdfPath;
    try {
      const filename = `internship-${uuidv4()}.pdf`;
      pdfPath = await generatePDF(formData, filename);
    } catch (err) {
      console.error('Error generating PDF:', err);
      return res.status(500).json({ error: 'Failed to generate PDF', details: err.message });
    }

    // Step 3: Send email to mentor with PDF
    try {
      await sendMailToMentor(formData.mentorEmail, pdfPath);
    } catch (err) {
      console.error('Error sending email to mentor:', err);
      return res.status(500).json({ error: 'Failed to send email to mentor', details: err.message });
    }

    // Step 4: Save to MongoDB with isApproved: false
    let newEntry;
    try {
      newEntry = new Internship({
        ...formData,
        isApproved: false,
      });
      await newEntry.save();
    } catch (err) {
      console.error('Error saving to MongoDB:', err);
      return res.status(500).json({ error: 'Failed to save internship data to database', details: err.message });
    }

    // Step 5 (Optional): Delete the PDF file after sending
    try {
      fs.unlink(pdfPath, (err) => {
        if (err) console.error('Error deleting PDF:', err);
        else console.log('Temporary PDF deleted.');
      });
    } catch (err) {
      console.error('Error deleting temporary PDF:', err);
      // Do not return an error response here since this is optional
    }

    res.status(201).json({ message: 'Internship submitted and sent to mentor!', data: newEntry });
  } catch (err) {
    console.error('Unexpected error:', err);
    res.status(500).json({ error: 'Unexpected server error', details: err.message });
  }
};




// POST - Submit internship data
// const submitInternship = async (req, res) => {
//   try {
//     const newEntry = new Internship(req.body);
//     await newEntry.save();
//     res.status(201).json({ message: 'Internship details saved!', data: newEntry });
//   } catch (err) {
//     res.status(500).json({ error: 'Error saving data', details: err });
//   }
// };

// GET - All internships
const getAllInternships = async (req, res) => {
  try {
    const allEntries = await Internship.find();
    res.status(200).json(allEntries);
  } catch (err) {
    res.status(500).json({ error: 'Error fetching data', details: err });
  }
};

// GET - Single internship by ID
const getInternshipById = async (req, res) => {
  try {
    const id = req.params.id;
    const entry = await Internship.findById(id);
    if (!entry) return res.status(404).json({ message: 'Entry not found' });
    res.status(200).json(entry);
  } catch (err) {
    res.status(500).json({ error: 'Error fetching entry', details: err });
  }
};

// DELETE - By ID
const deleteInternship = async (req, res) => {
  try {
    const id = req.params.id;
    const deleted = await Internship.findByIdAndDelete(id);
    if (!deleted) return res.status(404).json({ message: 'Entry not found' });
    res.status(200).json({ message: 'Entry deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Error deleting entry', details: err });
  }
};

// PUT - Update by ID
const updateInternship = async (req, res) => {
  try {
    const id = req.params.id;
    const updated = await Internship.findByIdAndUpdate(id, req.body, { new: true });
    if (!updated) return res.status(404).json({ message: 'Entry not found' });
    res.status(200).json({ message: 'Entry updated', data: updated });
  } catch (err) {
    res.status(500).json({ error: 'Error updating entry', details: err });
  }
};

module.exports = {
  submitInternship,
  getAllInternships,
  getInternshipById,
  deleteInternship,
  updateInternship,
  // getInternshipStats,
};
