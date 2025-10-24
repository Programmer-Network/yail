module.exports = {
  // Prettier options
  arrowParens: "avoid",
  bracketSpacing: true,
  jsxSingleQuote: true,
  printWidth: 80,
  proseWrap: "always",
  quoteProps: "as-needed",
  semi: true,
  singleQuote: false,
  trailingComma: "none",
  useTabs: false,
  endOfLine: "auto",
  plugins: [
    require.resolve("@trivago/prettier-plugin-sort-imports"),
    require.resolve("prettier-plugin-tailwindcss")
  ],
  importOrder: [
    "<THIRD_PARTY_MODULES>",
    "^Components/(.*)$",
    "^Utils/(.*)$",
    "^[./]"
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  importOrderGroupNamespaceSpecifiers: true
};
