/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Akira: ["Akira Expanded", "sans-serif"],
      },
      colors: {
        coolRed: "#dc2a36",
      },
    },
  },
  plugins: [],
};
