import React from 'react';

const Button = ({ onClick, variant = 'primary', children, className = '' }) => {
  const baseStyles = 'px-4 py-2 rounded-lg transition-colors duration-200 font-medium';
  const variants = {
    primary: 'bg-primary dark:bg-primary-dark text-white hover:bg-secondary dark:hover:bg-secondary-dark',
    secondary: 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600',
    danger: 'bg-red-500 text-white hover:bg-red-600 dark:bg-red-600 dark:hover:bg-red-700',
    success: 'bg-green-500 text-white hover:bg-green-600 dark:bg-green-600 dark:hover:bg-green-700',
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;