module.exports = {
  prefix: "yl-",
  important: true,
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "rgb(var(--color-primary) / <alpha-value>)",
        secondary: "rgb(var(--color-secondary) / <alpha-value>)",
        background: "rgb(var(--color-background) / <alpha-value>)",
        text: "rgb(var(--color-text) / <alpha-value>)",
        border: "rgb(var(--color-border) / <alpha-value>)",
        muted: "rgb(var(--color-muted) / <alpha-value>)",
        accent: "rgb(var(--color-accent) / <alpha-value>)",
        success: "rgb(var(--color-success) / <alpha-value>)",
        warning: "rgb(var(--color-warning) / <alpha-value>)",
        error: "rgb(var(--color-error) / <alpha-value>)",
        info: "rgb(var(--color-info) / <alpha-value>)"
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
