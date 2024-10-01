/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust this if your component files are in different locations
  ],
  theme: {
    extend: {
      colors:{
        customGray: '#333333',
        customGrey: '#B9B9B9'
      }
    },
  },
  plugins: [],
}
