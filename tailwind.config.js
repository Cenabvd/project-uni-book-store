/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*html','/src/**/*.html'],
  theme: {
    boxShadow:{
      navbarbottomshadow: '0px -2px 10px rgba(0, 0, 0, 0.2);',
      headertopshadow: '5px 2px 10px rgba(0, 0, 0, 0.2);',
      bottomshadow: '0px 3px 10px rgba(0, 0, 0, 0.100);'
    },
    extend: {},
  },
  plugins: [],
}
