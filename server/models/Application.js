const mongoose = require('mongoose');

const applicationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true
  },
  phone: {
    type: String,
    required: true,
    trim: true
  },
  linkedIn: {
    type: String,
    trim: true
  },
  portfolio: {
    type: String,
    trim: true
  },
  experience: {
    type: String,
    required: true
  },
  skills: {
    type: String,
    required: true
  },
  coverLetter: {
    type: String,
    required: true
  },
  preferredRole: {
    type: String,
    required: true
  },
  availability: {
    type: String,
    required: true
  },
  expectedSalary: {
    type: String
  },
  resumeFileName: {
    type: String
  },
  applicationDate: {
    type: Date,
    default: Date.now
  },
  status: {
    type: String,
    enum: ['pending', 'reviewed', 'interview', 'rejected', 'hired'],
    default: 'pending'
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Application', applicationSchema);