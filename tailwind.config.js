/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./src/*.html"],
  theme: {
    extend: {
      fontFamily: {
        urbanist: ["Urbanist", "sans-serif"],
      },
      backgroundImage: {
        "linear-colors":
          "linear-gradient(134.79deg, rgba(112, 59, 247, 0.5) -0.01%, rgba(112, 59, 247, 0) 9.65%)",
      },
      backgroundImage: {
        "linear-gradient":
          "linear-gradient(95.93deg, #262626 -14.82%, rgba(38, 38, 38, 0) 40.46%)",
      },
      backgroundImage: {
        header: "url('./assets/homepage/abstract-design.png')",
      },
      backgroundColor: {
        "header-bg": "rgba(26, 26, 26, 1)",
      },
      backgroundSize: {
        cover: "cover",
      },
      backgroundPosition: {
        center: "center",
      },
      backgroundRepeat: {
        "no-repeat": "no-repeat",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".border-linear": {
          border: "1px solid",
          borderImage:
            "linear-gradient(to bottom right, rgba(112, 59, 247, 1) 12.99%, rgba(38, 38, 38, 1) 39%) 1",
          borderRadius: "inherit",
          zIndex: "-1",
        },
      };

      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};
