/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Montserrat", "sans-serif"],
      georama: ["Georama", "sans-serif"],
      cagliostro: ["Cagliostro", "sans-serif"]
    },
    extend: {
      screens: {
        xs: "370px",
        ...defaultTheme.screens
      }
    }
  },
  plugins: []
};