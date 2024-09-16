import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import '../tailwind.css';

const UploadDoctor = () => {
  const [image, setImage] = useState(null);
  const [doctorInfo, setDoctorInfo] = useState(null);

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
    // Add more doctor details as needed
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    const fileName = file.name;  // Get the file name of the uploaded image

    // Display the image preview
    setImage(URL.createObjectURL(file));

    // Simulate a call to fetch doctor details based on the image file name
    if (doctorsDatabase[fileName]) {
      setDoctorInfo(doctorsDatabase[fileName]);
    } else {
      setDoctorInfo({
        name: 'Unknown Doctor',
        specialization: 'Specialization not found',
        hospital: 'Hospital not found',
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header Section */}
      <Header />

      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center p-8 bg-gradient-to-br from-blue-100 to-indigo-100">
        <h1 className="text-5xl font-extrabold text-gray-900 mb-8">Upload Doctor Image</h1>

        <div className="mb-6 w-full max-w-xs">
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 transition-all duration-300 ease-in-out"
          />
        </div>

        {image && (
          <div className="mb-6">
            <img 
              src={image} 
              alt="Doctor" 
              className="w-64 h-64 object-cover rounded-lg shadow-xl border-4 border-blue-300 transform hover:scale-105 transition-transform duration-300"
            />
          </div>
        )}

        {doctorInfo && (
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-xs text-center transform hover:scale-105 transition-transform duration-300 ease-in-out">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">{doctorInfo.name}</h2>
            <p className="text-lg text-gray-600">{doctorInfo.specialization}</p>
            <p className="text-lg text-gray-500 mt-2">{doctorInfo.hospital}</p>
          </div>
        )}

        {!doctorInfo && (
          <p className="text-gray-600 mt-6 text-center">
            Upload an image to identify the doctor.
          </p>
        )}
      </main>

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default UploadDoctor;
