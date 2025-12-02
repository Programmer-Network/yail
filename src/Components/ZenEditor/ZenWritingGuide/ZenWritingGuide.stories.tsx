import type { Meta, StoryObj } from "@storybook/react-vite";

import { ZenWritingGuide } from "./ZenWritingGuide";

const meta: Meta<typeof ZenWritingGuide> = {
  title: "ZenEditor / ZenWritingGuide",
  component: ZenWritingGuide,
  parameters: {
    layout: "fullscreen"
  }
};

export default meta;

type Story = StoryObj<typeof ZenWritingGuide>;

export const Default: Story = {
  render: () => (
    <div className='yl:min-h-screen yl:bg-background yl:p-8'>
      <div className='yl:max-w-2xl yl:mx-auto'>
        <h1 className='yl:text-2xl yl:font-bold yl:mb-4'>
          Writing Your Article
        </h1>
        <p className='yl:text-text/60 yl:mb-4'>
          Click the info icon in the bottom-right corner to see writing
          guidelines for creating effective technical articles.
        </p>
        <div className='yl:bg-text/5 yl:rounded-lg yl:p-6 yl:min-h-[300px]'>
          <p className='yl:text-text/40 yl:italic'>
            Your article content goes here...
          </p>
        </div>
      </div>
      <ZenWritingGuide />
    </div>
  )
};

export const WithCustomClassName: Story = {
  render: () => (
    <div className='yl:min-h-screen yl:bg-background yl:p-8'>
      <div className='yl:max-w-2xl yl:mx-auto'>
        <h1 className='yl:text-2xl yl:font-bold yl:mb-4'>
          Custom Positioned Guide
        </h1>
        <p className='yl:text-text/60'>
          The floating button can be customized with additional classes.
        </p>
      </div>
      <ZenWritingGuide className='yl:bottom-12 yl:right-12' />
    </div>
  )
};
