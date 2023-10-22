/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        inter: "'Inter', sans-serif;",
      },
      colors:{
        btnColor: "#36B37E",
        secondaryTextColor: "#A1A0AE",
        formBg: "#2C2C39"
      },
      backgroundImage: {
        banner: "url('https://i.ibb.co/Qbvn61D/ai-generated-7914562-1280.webp')",
      
      }
    },
  },
  plugins: [require("daisyui")],
}

