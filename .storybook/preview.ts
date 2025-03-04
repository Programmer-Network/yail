import type { Preview } from "@storybook/react";

import "../src/tailwind.css";

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
          value: "#000408"
        }
      ]
    },
    layout: "fullscreen"
  }
};

export default preview;
