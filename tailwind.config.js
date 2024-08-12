/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        "primary-blue": "#BDD4EF",
        "primary-red": "#FF3939",
        "primary-yellow": "#F18E1A",
        "black": "#0B171B",
        "white": "#FFFFFF",
        "grey": "#E0E0E0",
        "dark-grey": "#333333",
      },
      backgroundImage: (theme) => ({
        "gradient-bauhaus":
        "linear-gradient(135deg, #0055A4 25%, #D32E2E 50%, #FFCC00 75%)",

      }),
      fontFamily: {
        averia: ["'Averia Serif Libre'", "serif"],
        custom: ["'MyCustomFont'", "sans-serif"],
      },
      content: {
        brush: "url('./assets/brush.png')",
        person1: "url('./assets/person-1.png')",
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};
