const Otp = require('../models/otp');
const otpGenerator = require('otp-generator');
const nodemailer = require('nodemailer');


exports.sendOtp = async (req, res) => {
  try {
    const { email } = req.body;

    if (!email.endsWith('@abes.ac.in')) {
      return res.status(400).json({ message: "Only ABES email allowed" });
    }

    const otp = otpGenerator.generate(6, { digits: true });

    await Otp.create({
      email,
      otp,
      expiresAt: new Date(Date.now() + 5 * 60 * 1000) // 5 mins expiry
    });

    const transporter = nodemailer.createTransport({
        host: 'smtp.office365.com',
        port: 587,
        secure: false, // true for port 465, false for 587
        auth: {
          user: process.env.MAIL_USER,
          pass: process.env.MAIL_PASS
        }
      });
      

    await transporter.sendMail({
      from: process.env.MAIL_USER,
      to: email,
      subject: "ABES Portal OTP",
      html: `<p>Your OTP is <b>${otp}</b>. It is valid for 5 minutes.</p>`
    });

    res.json({ message: "OTP sent successfully" });

  } catch (err) {
    console.error("Error sending OTP:", err);
    res.status(500).json({ message: "Server error while sending OTP" });
  }
};

exports.verifyOtp = async (req, res) => {
  try {
    const { email, otp } = req.body;
    const existing = await Otp.findOne({ email, otp });

    if (!existing) {
      return res.status(400).json({ message: "Invalid OTP" });
    }

    if (existing.expiresAt < new Date()) {
      return res.status(400).json({ message: "OTP expired" });
    }

    await Otp.deleteMany({ email }); // Remove all old OTPs for that user

    res.json({ message: "OTP verified successfully" });

  } catch (err) {
    console.error("OTP verification error:", err);
    res.status(500).json({ message: "Server error while verifying OTP" });
  }
};
