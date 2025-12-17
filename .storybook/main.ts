import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: [
    "../src/Components/**/*.stories.@(js|jsx|mjs|ts|tsx)",
    "../src/Examples/**/*.stories.@(js|jsx|mjs|ts|tsx)",
    "../src/Views/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],

  addons: [
    "@storybook/addon-links",
    "@storybook/addon-docs",
    "@storybook/addon-vitest"
  ],

  framework: {
    name: "@storybook/react-vite",
    options: {}
  }
};
export default config;
