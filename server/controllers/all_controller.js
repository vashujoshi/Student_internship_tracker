const Internship = require('../models/allmodels');

// POST - Submit internship data
const submitInternship = async (req, res) => {
  try {
    const newEntry = new Internship(req.body);
    await newEntry.save();
    res.status(201).json({ message: 'Internship details saved!', data: newEntry });
  } catch (err) {
    res.status(500).json({ error: 'Error saving data', details: err });
  }
};

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
};
