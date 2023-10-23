/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    fontFamily: {
      'carter': ['Carter One', 'sans-serif'],
      'rem': ['REM', 'sans-serif'],
      'oswald': ['Oswald', 'sans-serif']
    },
    extend: {
      colors: {
        primary: "#050A80", // BG Blue
        secondary: "#D1CAFF", // Soft Lavender
        tertiary: "#070DAB", // blue-000
        "blue-100": "#060B96",
        "blue-200": "#040866",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #02042F",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.jpg')",
      },
    },
  },
  plugins: [],
};