module.exports = {
  prefix: "yl-",
  important: true,
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-background-color": "rgb(var(--color-bg) / <alpha-value>)",
        primary: "rgb(var(--color-primary) / <alpha-value>)",
        "primary-text-color": "rgb(var(--text-color) / <alpha-value>)"
      },
      keyframes: {
        "height-animation": {
          "0%": { height: "0", overflow: "hidden" },
          "50%": { height: "10rem" },
          "100%": { height: "20rem" }
        }
      },
      animation: {
        "height-animation":
          "height-animation 100ms cubic-bezier(0.3, 0.31, 0.59, 0.7)"
      }
    }
  }
};
