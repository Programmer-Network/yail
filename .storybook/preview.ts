import type { Preview } from "@storybook/react";
import "tailwindcss/tailwind.css";

import "../src/style.css";
import "./storybook.css";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    },
    backgrounds: {
      default: "programmer.network",
      values: [
        {
          name: "programmer.network",
          value: "#1b1f23"
        }
      ]
    },
    layout: "fullscreen"
  }
};

export default preview;
