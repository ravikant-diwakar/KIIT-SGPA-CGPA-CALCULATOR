import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-black text-white border-b border-gray-800 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo and Title */}
        <div className="flex items-center space-x-2 sm:space-x-3">
          <img
            src="https://upload.wikimedia.org/wikipedia/en/thumb/e/ef/KIIT_logo.svg/250px-KIIT_logo.svg.png"
            alt="KIIT Logo"
            className="h-6 sm:h-8 w-auto"
          />
          <span className="text-base sm:text-lg font-semibold tracking-wide leading-none sm:leading-normal">
            KIIT CALCULATOR
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6 text-sm sm:text-base font-medium">
          <a href="#calculator" className="hover:text-gray-300 transition duration-200">
            Calculator
          </a>
          <a href="#how-to-use" className="hover:text-gray-300 transition duration-200">
            How to Use
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          isMobileMenuOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 divide-y divide-gray-700 bg-black border-t border-gray-800">
          <a
            href="#calculator"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block py-3 text-sm font-medium hover:text-gray-300 transition"
          >
            Calculator
          </a>
          <a
            href="#how-to-use"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block py-3 text-sm font-medium hover:text-gray-300 transition"
          >
            How to Use
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
