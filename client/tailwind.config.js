module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,  
  
  content: [
    'node_modules/preline/dist/*.js','node_modules/preline/dist/*.js'
],
plugins: [
    require('preline/plugin'),
],
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require('flowbite/plugin'),
  require('preline/plugin')]

}