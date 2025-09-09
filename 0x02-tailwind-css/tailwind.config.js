/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./*.html",              // Add this line
    "./index.html"           // Add this line if you have index.html in root
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

