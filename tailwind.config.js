const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{html,js,jsx,css}"],
  theme: {
    colors: {
      ...colors,
    },
    extend: {
      colors: {
        dark: "#261F1C",
        aqua: "#00CCFF",
      },
    },
    fontFamily: {
      josefin: ["Josefin Sans", "sans-serif"],
    },
  },
  plugins: [],
};
