const InternshipModel = require('../models/allmodels');
const generatePDF = require('../utils/pdfgen');
const sendMailToMentor = require('../utils/sendmail');

const submitInternship = async (req, res) => {
  const internshipData = req.body;

  const newInternship = new InternshipModel(internshipData);
  await newInternship.save();

  const pdfPath = `./pdfs/${newInternship._id}.pdf`;
  generatePDF(internshipData, pdfPath);
  await sendMailToMentor(internshipData.mentor.email, pdfPath);

  res.status(200).json({ message: "Form submitted. Awaiting mentor approval." });
};
