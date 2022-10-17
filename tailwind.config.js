/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
    },
    fontFamily: {
      'pop': ['Poppins', 'sans-serif'],
    },
    extend: {
      fontSize:{
        large: "64px"
      },
    },
  },
  plugins: [],
}
