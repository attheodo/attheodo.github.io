module.exports = {
  darkMode: "class",
  content: [
    "./_includes/**/*.html",
    "./_layouts/**/*.html",
    "./_posts/**/*.md",
    "./*.html",
    "./*.md",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          300: "#9F9F9F",
          400: "#616161",
          500: "#1C0508",
          700: "#141414" 
        },
        brand: {
          500: "#E7374E"
        },
        snow: {
          50: "#E7E7E7"
        }
      },
      fontFamily: {
        menlo: [
          "Menlo",
          "Monaco",
          "Consolas",
          '"Liberation Mono"',
          '"Courier New"',
          "monospace",
        ],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
