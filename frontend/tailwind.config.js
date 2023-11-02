// tailwind.config.js

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class',  // This will help with implementing dark mode later on
  variants: {
    extend: {},
  },
  theme: {
    extend: {
      colors: {
        'palette-blue1': '#89aed6',
        'palette-blue2': '#a4d4f2',
        'palette-blue3': '#1d628a',
        'palette-blue4': '#d4ddee',
        'palette-blue5': '#69acd1',
        'palette-grey1': '#dfdfdf',
        'palette-grey2': '#e0e2e0',
        'palette-purple1': '#ecf2fb',
        'palette-purple2': '#dcd2ec',
        'palette-green': '#acc8f8',
      }
    },
  },
}
