/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // Ensures Tailwind applies to files in your 'src' folder
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
