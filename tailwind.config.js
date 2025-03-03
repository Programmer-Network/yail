/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      // Colors are now handled in @theme directive in tailwind.css
      // Animations are now handled in @theme directive in tailwind.css
    }
  }
};
