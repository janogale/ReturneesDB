/* eslint-env node */

const tailwindcss = require('tailwindcss')
module.exports = {
  plugins: [tailwindcss('./tailwind.js'), require('autoprefixer')],
}
