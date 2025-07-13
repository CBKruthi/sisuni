const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const Application = require('../models/Application');

const router = express.Router();

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/resumes/');
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
  }
});

const fileFilter = (req, file, cb) => {
  // Accept only PDF and DOC files
  if (file.mimetype === 'application/pdf' || 
      file.mimetype === 'application/msword' || 
      file.mimetype === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document') {
    cb(null, true);
  } else {
    cb(new Error('Only PDF and DOC files are allowed'), false);
  }
};

const upload = multer({ 
  storage: storage,
  fileFilter: fileFilter,
  limits: {
    fileSize: 5 * 1024 * 1024 // 5MB limit
  }
});

// Submit general application
router.post('/general', upload.single('resume'), async (req, res) => {
  try {
    const applicationData = {
  name: req.body.name, 
  email: req.body.email,
  phone: req.body.phone,
  linkedIn: req.body.linkedIn,
  portfolio: req.body.portfolio,
  experience: req.body.experience,
  skills: req.body.skills,
  coverLetter: req.body.coverLetter,
  preferredRole: req.body.preferredRole,
  availability: req.body.availability,
  expectedSalary: req.body.expectedSalary,
  resumeFileName: req.file ? req.file.filename : null,
};


    const application = new Application(applicationData);
    await application.save();

    res.status(201).json({
      success: true,
      message: 'Application submitted successfully',
      applicationId: application._id
    });
  } catch (error) {
    console.error('Error submitting application:', error);
    res.status(500).json({
      success: false,
      message: 'Error submitting application',
      error: error.message
    });
  }
});

// Get all applications (for admin)
router.get('/', async (req, res) => {
  try {
    const applications = await Application.find().sort({ createdAt: -1 });
    res.json({
      success: true,
      applications
    });
  } catch (error) {
    console.error('Error fetching applications:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching applications',
      error: error.message
    });
  }
});

// Get application by ID
router.get('/:id', async (req, res) => {
  try {
    const application = await Application.findById(req.params.id);
    if (!application) {
      return res.status(404).json({
        success: false,
        message: 'Application not found'
      });
    }
    res.json({
      success: true,
      application
    });
  } catch (error) {
    console.error('Error fetching application:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching application',
      error: error.message
    });
  }
});

// Get applications by email
router.get('/user/:email', async (req, res) => {
  try {
    const { email } = req.params;
    const applications = await Application.find({ email }).sort({ createdAt: -1 });
    res.json({
      success: true,
      applications
    });
  } catch (error) {
    console.error('Error fetching user applications:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching applications',
      error: error.message
    });
  }
});

// Update application
router.put('/:id', upload.single('resume'), async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = {
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      linkedIn: req.body.linkedIn,
      portfolio: req.body.portfolio,
      experience: req.body.experience,
      skills: req.body.skills,
      coverLetter: req.body.coverLetter,
      preferredRole: req.body.preferredRole,
      availability: req.body.availability,
      expectedSalary: req.body.expectedSalary,
    };

    // If new resume is uploaded, update the filename and delete old file
    if (req.file) {
      const oldApplication = await Application.findById(id);
      if (oldApplication && oldApplication.resumeFileName) {
        const oldFilePath = path.join('uploads/resumes/', oldApplication.resumeFileName);
        if (fs.existsSync(oldFilePath)) {
          fs.unlinkSync(oldFilePath);
        }
      }
      updateData.resumeFileName = req.file.filename;
    }

    const application = await Application.findByIdAndUpdate(id, updateData, { new: true });
    
    if (!application) {
      return res.status(404).json({
        success: false,
        message: 'Application not found'
      });
    }

    res.json({
      success: true,
      message: 'Application updated successfully',
      application
    });
  } catch (error) {
    console.error('Error updating application:', error);
    res.status(500).json({
      success: false,
      message: 'Error updating application',
      error: error.message
    });
  }
});

// Delete application
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const application = await Application.findById(id);
    
    if (!application) {
      return res.status(404).json({
        success: false,
        message: 'Application not found'
      });
    }

    // Delete resume file if exists
    if (application.resumeFileName) {
      const filePath = path.join('uploads/resumes/', application.resumeFileName);
      if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
      }
    }

    await Application.findByIdAndDelete(id);

    res.json({
      success: true,
      message: 'Application deleted successfully'
    });
  } catch (error) {
    console.error('Error deleting application:', error);
    res.status(500).json({
      success: false,
      message: 'Error deleting application',
      error: error.message
    });
  }
});

module.exports = router;