/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./app/**/*.{js,ts,jsx,tsx}",
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        fontFamily: {
          sans: ["var(--font-inter)", "sans-serif"],
        },
        colors: {
          black: "#24222f",
          red: "#e5372c",
        },
      },
    },
    plugins: [],
  };
  