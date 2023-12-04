module.exports = {
  darkMode: "class",
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-background-color": "var(--color-bg)",
        primary: "var(--color-primary)",
        "primary-text-color": "var(--text-color)",
        "primary-background-color-40": "var(--color-bg-rgb)"
      },
      keyframes: {
        heightAnimation: {
          "0%": { height: "0", overflow: "hidden" },
          "50%": { height: "10rem" },
          "100%": { height: "20rem" }
        }
      },
      animation: {
        heightAnimation:
          "heightAnimation 100ms cubic-bezier(0.3, 0.31, 0.59, 0.7)"
      }
    }
  }
};
