/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-background': "url('./Amkeni.webp')"
      },
      backgroundColor: {
        'amkeniBlue': "#84caea"
      },
      colors: {
        'amkeniBlue': "#84caea"
      }
    },
  },
  plugins: [],
}