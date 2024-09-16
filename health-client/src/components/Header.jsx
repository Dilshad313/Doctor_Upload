import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation

const Header = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogout = () => {
    // Perform the logout logic (e.g., clearing tokens, etc.)
    setIsAuthenticated(false);
  };

  return (
    <header className="w-full bg-red p-4 shadow-md flex justify-between items-center">
      {/* Logo Section */}
      <div className="flex items-center space-x-2">
        <div className="text-black font-bold text-2xl">W.</div>
      </div>

      {/* Navigation Links */}
      <nav className="flex items-center space-x-8">
        <div className="flex items-center space-x-2">
          <Link to="/" className="text-black hover:text-gray-500">Explore</Link>
          <span className="text-black">⌄</span>
        </div>
        <Link to="/" className="text-black hover:text-gray-500">Directory</Link>
        <Link to="/" className="text-black hover:text-gray-500">Academy</Link>
        <Link to="/" className="text-black hover:text-gray-500">
          Conferences <span className="bg-black text-white text-xs rounded-full px-2 py-0.5 ml-1">2</span>
        </Link>
        <Link to="/" className="text-black hover:text-gray-500">Market</Link>
      </nav>

      {/* Search Bar */}
      <div className="flex-1 mx-6">
        <input
          type="text"
          placeholder="Search by Websites"
          className="bg-gray-300 p-2 rounded-full w-full max-w-md text-gray-600 focus:outline-none"
        />
      </div>

      {/* Authentication Links */}
      <div className="flex items-center space-x-4">
        {!isAuthenticated ? (
          <>
            <Link to="/login" className="text-black hover:text-gray-500">Log in</Link>
            <Link to="/signup" className="text-black hover:text-gray-500">Sign Up</Link>
          </>
        ) : (
          <button
            onClick={handleLogout}
            className="text-red-500 hover:text-red-600"
          >
            Logout
          </button>
        )}
      </div>

      {/* Buttons */}
      <div className="flex items-center space-x-2">
        <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition">
          Be Pro
        </button>
        <button className="border border-black text-black px-4 py-2 rounded hover:bg-gray-100 transition">
          Submit Website
        </button>
      </div>
    </header>
  );
};

export default Header;
