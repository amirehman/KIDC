/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        't-red': '#FF0000',
        't-green': '#30624F',
      }
    },
  },
  plugins: [],
}

