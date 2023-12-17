/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      xsm: '250px',
      ...defaultTheme.screens,
      // md: '640px',
      // lg: '1240px'
    },
    extend: {},
  },
  plugins: [],
}

