import React from "react";

const Button = ({ onClick, variant = "primary", children, className = "" }) => {
  const baseStyles =
    "px-4 py-2 rounded-lg transition-all duration-200 font-medium flex items-center justify-center";
  const borderStyle = "border border-solid border-opacity-10 border-white";

  const variants = {
    primary: {
      background: "bg-black", // pure black background
      text: "text-white", // pure white text
    },
    secondary: {
      background: "bg-gray-900", // very dark gray background (almost black)
      text: "text-gray-300", // light gray text
    },
    danger: {
      background: "bg-gray-800", // dark gray background
      text: "text-white", // white text for contrast
    },
    success: {
      background: "bg-gray-700", // slightly lighter dark gray
      text: "text-white", // white text
    },
  };

  // Fallback to primary if variant not found
  const variantStyles = variants[variant] || variants["primary"];

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
