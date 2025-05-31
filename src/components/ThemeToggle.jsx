import React from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

const ThemeToggle = () => {
  const toggleTheme = () => {
    if (document.documentElement.classList.contains('dark')) {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
    } else {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-4 right-4 p-3 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200 z-50"
      aria-label="Toggle theme"
    >
      <FaSun className="hidden dark:block w-5 h-5 text-yellow-500" />
      <FaMoon className="block dark:hidden w-5 h-5 text-gray-700" />
    </button>
  );
};

export default ThemeToggle;