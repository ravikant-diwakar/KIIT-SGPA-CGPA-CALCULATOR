// import React from 'react';

// const Button = ({ onClick, variant = 'primary', children, className = '' }) => {
//   const baseStyles = 'px-4 py-2 rounded-lg transition-colors duration-200 font-medium';
//   const variants = {
//     primary: 'bg-primary dark:bg-primary-dark text-white hover:bg-secondary dark:hover:bg-secondary-dark',
//     secondary: 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600',
//     danger: 'bg-red-500 text-white hover:bg-red-600 dark:bg-red-600 dark:hover:bg-red-700',
//     success: 'bg-green-500 text-white hover:bg-green-600 dark:bg-green-600 dark:hover:bg-green-700',
//   };

//   return (
//     <button
//       onClick={onClick}
//       className={`${baseStyles} ${variants[variant]} ${className}`}
//     >
//       {children}
//     </button>
//   );
// };

// export default Button;


import React from 'react';

const Button = ({ onClick, variant = 'primary', children, className = '' }) => {
  const baseStyles = 'px-4 py-2 rounded-lg transition-all duration-200 font-medium flex items-center justify-center';
  const borderStyle = 'border border-solid border-opacity-10 border-white';

  // Muted, professional color variants
  const variants = {
    primary: {
      background: 'bg-blue-600/80 hover:bg-blue-600/90',
      text: 'text-white',
    },
    secondary: {
      background: 'bg-gray-700/80 hover:bg-gray-700/90',
      text: 'text-gray-200',
    },
    danger: {
      background: 'bg-red-600/80 hover:bg-red-600/90',
      text: 'text-white',
    },
    success: {
      background: 'bg-green-600/80 hover:bg-green-600/90',
      text: 'text-white',
    },
  };

  // Fallback to primary if variant not found
  const variantStyles = variants[variant] || variants['primary'];

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${borderStyle} ${variantStyles.background} ${variantStyles.text} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
