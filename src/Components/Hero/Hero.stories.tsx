import { Meta, StoryObj } from "@storybook/react-vite";

import Button from "Components/Button";
import { ButtonVariantEnum } from "Components/Button/types";

import Hero from "./index";

const meta: Meta<typeof Hero> = {
  title: "Components/Hero",
  component: Hero,
  tags: ["autodocs"]
};
export default meta;

type Story = StoryObj<typeof Hero>;

const withMaxWidth = (StoryComponent: any) => (
  <div className='w-[1024px] mx-auto'>
    <StoryComponent />
  </div>
);

export const WithCover: Story = {
  args: {
    coverImage: "https://picsum.photos/800/300?random=1",
    title: "Event Title",
    description: "This is a description for an event with a cover photo."
  },
  decorators: [withMaxWidth]
};

export const WithoutCover: Story = {
  args: {
    title: "Meetup Title",
    description: "This is a description for a meetup without a cover photo."
  },
  decorators: [withMaxWidth]
};

export const WithPills: Story = {
  args: {
    title: "Event with Pills",
    pills: [
      { label: "Live", variant: "success", children: "Live" },
      { label: "Workshop", variant: "indigo", children: "Workshop" }
    ],
    description: "This event has pills for status and type."
  },
  decorators: [withMaxWidth]
};

export const WithActions: Story = {
  args: {
    title: "Event with Actions",
    description: "This event has action buttons.",
    actions: [
      <Button key='edit' outlined>
        Edit
      </Button>,
      <Button key='share' variant={ButtonVariantEnum.SECONDARY}>
        Share
      </Button>,
      <Button key='share' variant={ButtonVariantEnum.PRIMARY}>
        Share
      </Button>
    ]
  },
  decorators: [withMaxWidth]
};

export const FullFeatured: Story = {
  args: {
    coverImage: "https://picsum.photos/800/300?random=2",
    title: "Full Featured Hero",
    description: "This hero has a cover, pills, and actions.",
    pills: [
      { label: "Upcoming", variant: "primary", children: "Upcoming" },
      { label: "Online", variant: "indigo", children: "Online" }
    ],
    actions: [
      <Button key='edit' outlined>
        Edit
      </Button>,
      <Button key='share' variant={ButtonVariantEnum.SECONDARY}>
        Share
      </Button>
    ]
  },
  decorators: [withMaxWidth]
};
