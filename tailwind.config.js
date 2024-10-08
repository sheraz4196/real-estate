/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./src/*.html"],
  theme: {
    extend: {
      fontSize: {
        "xs-10": "10px", // Custom class for 10px font size
      },
      fontFamily: {
        urbanist: ["Urbanist", "sans-serif"],
      },
      textColor: {
        "custom-gray": "#999999", // Custom text color for #999999
      },
      borderColor: {
        "dark-border": "#262626", // Custom class for the #262626 border color
      },
      backgroundImage: {
        "linear-colors":
          "linear-gradient(134.79deg, rgba(112, 59, 247, 0.5) -0.01%, rgba(112, 59, 247, 0) 9.65%)",
      },
      backgroundImage: {
        "linear-gradient":
          "linear-gradient(95.93deg, #262626 -14.82%, rgba(38, 38, 38, 0) 40.46%)",
      },
      backgroundColor: {
        "custom-dark": "#1A1A1A", // Custom background color
      },
      backgroundImage: {
        header: "url('./assets/homepage/abstract-design.png')",
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
