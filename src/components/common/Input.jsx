import React from 'react';

const Input = ({ type = 'text', value, onChange, placeholder, className = '', ...props }) => {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`p-2 border rounded-lg focus:ring-2 focus:ring-primary dark:focus:ring-primary-dark focus:border-transparent outline-none
        bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100
        border-gray-300 dark:border-gray-600
        placeholder-gray-500 dark:placeholder-gray-400
        ${className}`}
      {...props}
    />
  );
};

export default Input;