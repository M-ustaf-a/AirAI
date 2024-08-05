/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'light-gray': '#d3d3d3', // Define your light gray color here
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
}