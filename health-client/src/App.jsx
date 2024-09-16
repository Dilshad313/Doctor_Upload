import React from 'react';
import UploadDoctor from './components/UploadDoctor';
import Signup from './components/Signup';
import Login from './components/Login';
import './tailwind.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Define your routes inside the Routes component */}
        <Route path="/" element={<UploadDoctor />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
