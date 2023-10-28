/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class',  // This will help with implementing dark mode later on
  variants: {
    extend: {},
  },
  plugins: [],
}
