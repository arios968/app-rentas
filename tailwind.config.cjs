/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#097AB2",
      },
      fontSize: {
        xxs: "0.625rem", //10px
      },
    },
  },
  plugins: [],
};
