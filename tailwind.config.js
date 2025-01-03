/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#1e40af",
          dark: "#3b82f6"
        },
        secondary: {
          DEFAULT: "#1e3a8a",
          dark: "#2563eb"
        }
      }
    },
  },
  plugins: [],
}