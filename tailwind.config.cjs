/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#94b4c4",
      'orange-light': '#e4946c',
      'yellow-light': '#f4cc9c',
      'red-dark': '#703314',
      'gray-medium': '#6c7c9c',
    
      },
      fontSize: {
        xxs: "0.625rem", //10px
      },
    },
  },
  plugins: [],
};
