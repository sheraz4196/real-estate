/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./src/*.html"],
  theme: {
    extend: {
      backgroundColor: {
        "color-all": "rgba(20, 20, 20, 1)", // Custom background color
      },
      backgroundImage: {
        header: "url('/public/assets/homepage/abstract-design.png')",
      },
    },
  },
  plugins: [],
};
