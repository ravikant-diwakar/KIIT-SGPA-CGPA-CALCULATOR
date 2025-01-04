import React from 'react';
import { FaGraduationCap } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="bg-white dark:bg-gray-800 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <FaGraduationCap className="h-8 w-8 text-primary dark:text-primary-dark" />
            <span className="ml-3 text-xl font-bold text-gray-900 dark:text-white">KIIT Calculator</span>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#calculator" className="text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary-dark">
              Calculator
            </a>
            <a href="#how-to-use" className="text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary-dark">
              How to Use
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
