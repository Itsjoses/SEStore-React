/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#5025D1',
        'secondary': '#FAFBFF',
        'third': '#00B092'
      },
      fontFamily: {
        'CustomFont': ["CustomFont"],
      },
    },
  },
  plugins: [],
}