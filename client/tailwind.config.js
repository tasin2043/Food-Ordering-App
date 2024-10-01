/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        orange: "#F6723D",
        red: "#FF6868",
        secondary: "#555",
        primaryBG: "#FCFCFC",
      },

      fontFamily: {
        green: "#51E85F",
        red: "#FF6868",
        secondary: "#555",
        primaryBG: "#FCFCFC",
      },
      // fontFamily: {
      //   primary: ["Playpen Sans", "cursive"],
      // },
    },
  },
  plugins: [require("daisyui")],
};

