import type { Preview } from "@storybook/react-vite";
import React from "react";
import { MemoryRouter } from "react-router-dom";

import "../src/tailwind.css";

const preview: Preview = {
  decorators: [
    Story => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    )
  ],
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    },
    backgrounds: {
      default: "dark",
      values: [
        {
          name: "dark",
          value: "oklch(14.48% 0 0)"
        },
        {
          name: "light",
          value: "#f0f0f0"
        }
      ]
    },
    layout: "fullscreen"
  }
};

export default preview;
