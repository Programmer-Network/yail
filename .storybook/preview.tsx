import type { Preview } from "@storybook/react-vite";
import React from "react";
import { MemoryRouter } from "react-router-dom";

import "../src/tailwind.css";

const preview: Preview = {
  decorators: [
    Story => (
      <div className='yl:mx-auto yl:my-6 yl:w-full yl:px-4 yl:sm:max-w-5xl yl:md:max-w-4xl yl:lg:max-w-5xl yl:pb-16 yl:md:pb-0 yl:lg:px-0'>
        <MemoryRouter>
          <Story />
        </MemoryRouter>
      </div>
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
      options: {
        dark: {
          name: "dark",
          value: "oklch(14.48% 0 0)"
        },

        light: {
          name: "light",
          value: "#f0f0f0"
        }
      }
    },
    layout: "fullscreen"
  },

  initialGlobals: {
    backgrounds: {
      value: "dark"
    }
  }
};

export default preview;
