const express = require('express');
const multer = require('multer');
const cors = require('cors');
const path = require('path');

const app = express();
const port = 5000;

// Allow cross-origin requests
app.use(cors());

// Configure multer for file upload
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname); // Use original file name for simplicity
  }
});
const upload = multer({ storage });

// Simulate a doctor database
const doctorsDatabase = {
  'doctor1.jpg': {
    name: 'Dr. Sarah Johnson',
    specialization: 'Cardiologist',
    hospital: 'City Health Clinic',
  },
  'doctor2.jpg': {
    name: 'Dr. Michael Brown',
    specialization: 'Neurologist',
    hospital: 'Metro General Hospital',
  },
  'doctor3.jpg': {
    name: 'Dr. Emily Davis',
    specialization: 'Pediatrician',
    hospital: 'Sunshine Children’s Hospital',
  },
};

// Route to handle file upload
app.post('/api/upload-doctor', upload.single('image'), (req, res) => {
  const fileName = req.file.originalname;

  // Simulate doctor identification logic
  if (doctorsDatabase[fileName]) {
    res.json(doctorsDatabase[fileName]);
  } else {
    res.json({
      name: 'Unknown Doctor',
      specialization: 'Specialization not found',
      hospital: 'Hospital not found',
    });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
