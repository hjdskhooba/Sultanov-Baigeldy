/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        carmorant: ["Carmorant", "sans-serif"],
      },
      animation: {
        "scroll-x": "scroll-x 55s  infinite linear",
      },
      boxShadow: {
        "custom-shadow": "6px 6px 6px 0px rgba(0, 0, 0, 0.12);",
      },
      colors: {
        orange: "#EC5C03",
      },
      keyframes: {
        "scroll-x": {
          "0%": {
            transform: "translate(0,0)",
          },
          "100%": {
            transform: "translate(-100%,0)",
          },
        },
      },
    },
    plugins: [
      function ({ addBase, config }) {
        addBase({
          ".font-carmorant": {
            fontFamily: config("theme.fontFamily.carmorant"),
          },
        });
      },
    ],
  },
};
