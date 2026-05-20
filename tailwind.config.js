/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        amber: { DEFAULT: "#c8832a", dark: "#b8711a" },
        crimson: "#8b1a1a",
        ink: {
          900: "#0c0b0a", 800: "#141210",
          700: "#1c1916", 600: "#2a2520",
        },
        cream: {
          50:  "#f7f3ed", 100: "#ede8e0",
          200: "#ddd4c5", 300: "#c8b89a",
        },
      },
      fontFamily: {
        display: ["'Bebas Neue'", "sans-serif"],
        serif:   ["'Cormorant Garamond'", "Georgia", "serif"],
        sans:    ["'DM Sans'", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
}
