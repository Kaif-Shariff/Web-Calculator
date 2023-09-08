/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.html"],
  theme: {
    colors: {
      myblack: "#1D1C1A",
      myorange: "#FD7A29",
      mypink: "#F82A6B",
      myoffwhite2: "#D9D9D9",
    },
    extend: {
      transitionProperty: {
        "smooth-bg": "background-color",
      },
    },
  },
  plugins: [],
};
