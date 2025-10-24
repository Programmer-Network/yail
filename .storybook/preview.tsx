import type { Preview } from "@storybook/react-vite";
import { MemoryRouter } from "react-router-dom";

import "../src/tailwind.css";

const preview: Preview = {
  decorators: [
    Story => (
      <div className='mx-auto my-6 w-full px-4 pb-16 sm:max-w-5xl md:max-w-4xl md:pb-0 lg:max-w-5xl lg:px-0'>
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
