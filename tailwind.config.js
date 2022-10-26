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
    screens: {
      sm: "375.1px",
      md: "768px",
      lg: "1000px",
    },
    colors: {
      body: "hsl(217, 18%, 14%)",
      white: "hsl(0, 0%, 100%)",
      text: "hsl(0, 0%, 83%)",
      buttonBg: "hsl(217, 10%, 25%)",
      cyan: "hsl(166, 100%, 34%)",
      veryDark: "hsl(0, 0%, 0%)",
      gray: "hsl(217, 13%, 27%)",
    },
    fontFamily: {
      pop: [`"Poppins", "sans-serif"`],
    },
    extend: {},
  },
  plugins: [],
}
