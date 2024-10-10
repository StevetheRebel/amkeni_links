/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-background': "url('./src/assets/Amkeni.jpg')"
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