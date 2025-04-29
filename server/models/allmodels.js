const mongoose = require('mongoose');

const internshipSchema = new mongoose.Schema({
  studentName: {
    type: String,
    required: true
  },
  emailAddress: {
    type: String,
    required: true
  },
  phoneNumber: {
    type: String,
    required: true
  },
  degree: {
    type: String,
    required: true
  },
  yearOfGraduation: {
    type: String,
    required: true
  },
  internshipTitle: {
    type: String,
    required: true
  },
  companyName: {
    type: String,
    required: true
  },
  stipendPerMonth: {
    type: Number,
    required: true
  },
  location: {
    type: String,
    enum: ['Remote', 'Hybrid', 'Onsite'],
    required: true
  },
  responsibilities: {
    type: String,
    required: true
  },
  duration: {
    from: {
      type: Date,
      required: true
    },
    to: {
      type: Date,
      required: true
    },
  },
    mentorName: {
      type: String,
      // required: true
    },
    mentorEmail: {
      type: String,
      required: true
    },
    isApproved: {
      type: Boolean,
      default: false
    }
});

const InternshipModel = mongoose.model('Internship', internshipSchema);

module.exports = InternshipModel;
