module.exports = {
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')],
  important: true,
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
    './.storybook/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {},
    colors: {
      'primary-background-color': 'var(--color-bg)',
      primary: 'var(--color-primary)',
      'primary-text-color': 'var(--text-color)',
      'primary-background-color-40': 'var(--color-bg-rgb)',
    },
  },
};
