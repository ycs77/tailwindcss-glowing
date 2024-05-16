/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./demo/index.html'],
  theme: {
    extend: {},
  },
  plugins: [require('../src/index.js')],
}
