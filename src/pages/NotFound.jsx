import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = ({ darkMode }) => {
  const accentColor = darkMode ? 'text-purple-400' : 'text-amber-600';

  return (
    <div className={`pt-24 px-6 pb-20 min-h-screen flex items-center justify-center ${darkMode ? 'bg-[#1e293b]' : 'bg-gray-50'} transition-colors duration-500`}>
      <div className="text-center">
        <h1 className={`text-6xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
          404
        </h1>
        <p className="text-2xl text-gray-400 mb-8">Page not found</p>
        <Link
          to="/"
          className={`inline-block border ${darkMode ? 'border-purple-400 text-purple-400 hover:bg-purple-400/10' : 'border-amber-600 text-amber-600 hover:bg-amber-600/10'} px-6 py-3 rounded-lg transition-all`}
        >
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;