/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: "'Inter', sans-serif;",
      },
      colors:{
        btnColor: "#36B37E",
        secondaryTextColor: "#A1A0AE",
        formBg: "#2C2C39"
      }
    },
  },
  plugins: [require("daisyui")],
}

