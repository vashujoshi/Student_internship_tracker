// server/generatePDF.js
const PDFDocument = require('pdfkit');
const fs = require('fs');
const path = require('path');

const generatePDF = (formData, filename) => {
  return new Promise((resolve, reject) => {
    const doc = new PDFDocument();
    const filePath = path.join(__dirname, 'pdfs', filename);

    // Ensure directory exists
    fs.mkdirSync(path.dirname(filePath), { recursive: true });

    const stream = fs.createWriteStream(filePath);
    doc.pipe(stream);

    doc.fontSize(16).text('Internship Approval Form', { underline: true });

    Object.entries(formData).forEach(([key, value]) => {
      doc.moveDown().fontSize(12).text(`${key}: ${value}`);
    });

    doc.end();

    stream.on('finish', () => resolve(filePath));
    stream.on('error', reject);
  });
};

module.exports = generatePDF;
