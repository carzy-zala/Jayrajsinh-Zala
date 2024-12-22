/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        floating: {
          "0%": { transform: "translate(0, 0)" },
          "25%": { transform: "translate(5px, -5px)" },
          "50%": { transform: "translate(0, -10px)" },
          "75%": { transform: "translate(-5px, -5px)" },
          "100%": { transform: "translate(0, 0)" },
        },
      },
      animation: {
        floating: "floating 4s ease-in-out infinite",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        bubblegum: ["Bubblegum Sans", "cursive"],
        marck: ["Marck Script", "cursive"],
        lavishly: ["Lavishly Yours", "cursive"],
      },
      boxShadow: {
        custom: "rgba(17, 12, 46, 0.15) 0px 48px 50px 0px;",
      },
      colors: {
        "green-btn": "#286F6C",
        "green-btn-300": "#51b8b3",
        "name-color": "#456284",
      },
      screens:{
        "mobile":"320px"
      }
    },
  },
  plugins: [],
};
