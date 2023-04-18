/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: { center: true },
    extend: {
      height: {
        128: "36rem",
      },
      width: {
        112: "27rem",
      },
      fontFamily: {
        gemunu: ["Gemunu Libre", "sans-serif"],
        open: ["Open Sans", "sans-serif"],
      },
      colors: {
        "star-yellow": "#ffe81f",
      },
    },
  },
  plugins: [],
};
