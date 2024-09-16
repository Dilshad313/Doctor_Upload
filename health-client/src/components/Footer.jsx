// Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-800 to-gray-900 w-full p-6 shadow-inner mt-8">
      <div className="max-w-7xl mx-auto text-center text-gray-400">
        <p>&copy; 2024 Healthcare App. All Rights Reserved.</p>
        <div className="space-x-6 mt-2">
          <a href="#privacy" className="text-gray-400 hover:text-gray-200 transition duration-300">Privacy Policy</a>
          <a href="#terms" className="text-gray-400 hover:text-gray-200 transition duration-300">Terms of Service</a>
        </div>
        <div className="mt-4">
          <a href="#twitter" className="text-blue-400 hover:text-blue-200 mx-2">Twitter</a>
          <a href="#facebook" className="text-blue-600 hover:text-blue-400 mx-2">Facebook</a>
          <a href="#linkedin" className="text-blue-500 hover:text-blue-300 mx-2">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
