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
      sm: "375px",
      md: "768px",
      lg: "1024px",
      xl: "1200px",
    },
    fontFamily: {
      pop: ["Poppins", "sans-serif"],
    },
    fontSize: {
      "head-sm": [
        "2.5rem",
        {
          lineHeight: "2rem",
          letterSpacing: "-2%",
          fontWeight: "700",
        },
      ],
      "head-lg": [
        "4rem",
        {
          lineHeight: "2rem",
          letterSpacing: "-2%",
          fontWeight: "700",
        },
      ],
      nav: [
        "1.5rem",
        {
          fontWeight: "400",
        },
      ],
      "nav-hover": [
        "1.5rem",
        {
          fontWeight: "400",
        },
      ],
      sm: [
        "1.125rem",
        {
          fontWeight: "400",
        },
      ],
      md: [
        "1.25rem",
        {
          fontWeight: "400",
        },
      ],
    },
    extend: {},
  },
  plugins: [],
}
