const nodemailer = require('nodemailer');

const sendMailToMentor = async (mentorEmail, pdfPath) => {
  const transporter = nodemailer.createTransport({
    service: 'outlook',
    auth: {
      user: 'vaibhav.22b0101022@abes.ac.in',
      pass: 'Guf95549'
    }
  });

  const mailOptions = {
    from: 'vaibhav.22b0101022@abes.ac.in',
    to: mentorEmail,
    subject: 'New Internship Approval Request',
    text: 'Please find the attached internship request for approval.',
    attachments: [{ path: pdfPath }]
  };

  await transporter.sendMail(mailOptions);
};

module.exports = sendMailToMentor;
