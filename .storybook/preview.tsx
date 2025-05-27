import type { Preview } from "@storybook/react";
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
      default: "programmer.network",
      values: [
        {
          name: "programmer.network",
          value: "#1d1d1d"
        }
      ]
    },
    layout: "fullscreen"
  }
};

export default preview;
