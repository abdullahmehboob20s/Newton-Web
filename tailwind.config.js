/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      white: "white",
      black: "black",
      transparent: "transparent",
      brand: {
        100: "rgba(57, 57, 57,.1)",
        200: "rgba(57, 57, 57,.2)",
        300: "rgba(57, 57, 57,.3)",
        400: "rgba(57, 57, 57,.4)",
        500: "rgba(57, 57, 57,.5)",
        600: "rgba(57, 57, 57,.6)",
        700: "rgba(57, 57, 57,.7)",
        800: "rgba(57, 57, 57,.8)",
        900: "rgba(57, 57, 57,.9)",
        1000: "rgba(57, 57, 57,1)",
      },
      primary: "#6F6C72",
      secondary: {
        100: "rgba(203, 207, 209,.1)",
        200: "rgba(203, 207, 209,.2)",
        300: "rgba(203, 207, 209,.3)",
        400: "rgba(203, 207, 209,.4)",
        500: "rgba(203, 207, 209,.5)",
        600: "rgba(203, 207, 209,.6)",
        700: "rgba(203, 207, 209,.7)",
        800: "rgba(203, 207, 209,.8)",
        900: "rgba(203, 207, 209,.9)",
        1000: "rgba(203, 207, 209,1)",
      },
    },
    fontFamily: {
      questrial: "'Questrial', sans-serif",
      "eras-demi": "eras-demi",
    },

    extend: {
      spacing: {
        ofNavbarHeight: "var(--navbar-height)",
        "1px": "1px",
        "100px": "100px",
        "150px": "150px",
        "200px": "200px",
      },
      borderWidth: {
        "1px": "1px",
      },
      dropShadow: {
        navLinks: "0px 4px 4px rgba(0, 0, 0, 0.25)",
      },
    },
  },
  plugins: [],
};
