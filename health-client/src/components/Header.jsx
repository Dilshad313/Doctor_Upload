import React, { useState } from 'react';
import { Link } from 'react-router-dom';  // Assuming you are using React Router for navigation

const Header = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogout = () => {
    // Perform the logout logic (e.g., clearing tokens, etc.)
    setIsAuthenticated(false);
  };

  return (
    <header className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 p-4 shadow-md flex justify-between items-center">
      <div className="text-white font-bold text-2xl">HealthCare</div>

      <nav>
        <ul className="flex space-x-6 text-white">
          {!isAuthenticated ? (
            <>
              {/* Show Signup and Login if not authenticated */}
              <li>
                <Link to="/signup" className="hover:text-gray-300">
                  Signup
                </Link>
              </li>
              <li>
                <Link to="/login" className="hover:text-gray-300">
                  Login
                </Link>
              </li>
            </>
          ) : (
            <>
              {/* Show Logout if authenticated */}
              <li>
                <button
                  onClick={handleLogout}
                  className="bg-red-500 px-4 py-2 rounded hover:bg-red-600 transition-all duration-200"
                >
                  Logout
                </button>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
