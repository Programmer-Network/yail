import type { Meta, StoryObj } from "@storybook/react-vite";

import { UpcomingEventCard } from "./UpcomingEventCard";
import { IUpcomingEventCardData } from "./UpcomingEventCard.types";

const meta = {
  title: "Components/UpcomingEventCard",
  component: UpcomingEventCard,
  parameters: {
    layout: "padded"
  },
  decorators: [
    Story => (
      <div className='max-w-sm'>
        <Story />
      </div>
    )
  ],
  tags: ["autodocs"]
} satisfies Meta<typeof UpcomingEventCard>;

export default meta;
type Story = StoryObj<typeof meta>;

const mockNavLink = ({
  children,
  to,
  ...props
}: React.PropsWithChildren<{ to: string }>) => (
  <a href={to} {...props}>
    {children}
  </a>
);

const mockEventData: IUpcomingEventCardData = {
  title: "React Advanced Workshop",
  eventURL: "/meetups/react-meetup/events/react-workshop",
  dateAndTime: "2025-10-31T20:12:00Z",
  summary:
    "Learn advanced React patterns and best practices in this hands-on workshop."
};

export const Default: Story = {
  args: {
    data: mockEventData,
    NavLink: mockNavLink as never,
    onCardClick: data => console.log("Card clicked:", data)
  }
};

export const LongTitle: Story = {
  args: {
    data: {
      ...mockEventData,
      title:
        "Advanced React Patterns and Best Practices Workshop for Professional Developers"
    },
    NavLink: mockNavLink as never,
    onCardClick: data => console.log("Card clicked:", data)
  }
};

export const LongDescription: Story = {
  args: {
    data: {
      ...mockEventData,
      summary:
        "Join us for an intensive full-day workshop covering advanced React patterns including hooks, context, performance optimization, and more. This is a comprehensive workshop designed for experienced developers."
    },
    NavLink: mockNavLink as never,
    onCardClick: data => console.log("Card clicked:", data)
  }
};

export const Loading: Story = {
  args: {
    data: mockEventData,
    NavLink: mockNavLink as never,
    isLoading: true
  }
};

export const MultipleCards: Story = {
  args: {
    data: mockEventData,
    NavLink: mockNavLink as never
  },
  render: () => (
    <div className='space-y-3'>
      <UpcomingEventCard
        data={{
          title: "React Advanced Workshop",
          eventURL: "/meetups/react-meetup/events/react-workshop",
          dateAndTime: "2025-10-31T20:12:00Z",
          summary: "Learn advanced React patterns and best practices."
        }}
        NavLink={mockNavLink as never}
        onCardClick={data => console.log("Card clicked:", data)}
      />
      <UpcomingEventCard
        data={{
          title: "TypeScript Deep Dive",
          eventURL: "/meetups/typescript-meetup/events/typescript-deep-dive",
          dateAndTime: "2025-11-05T18:00:00Z",
          summary: "Master TypeScript with real-world examples."
        }}
        NavLink={mockNavLink as never}
        onCardClick={data => console.log("Card clicked:", data)}
      />
      <UpcomingEventCard
        data={{
          title: "Node.js Performance Optimization",
          eventURL: "/meetups/nodejs-meetup/events/nodejs-performance",
          dateAndTime: "2025-11-12T19:30:00Z",
          summary: "Optimize your Node.js applications for production."
        }}
        NavLink={mockNavLink as never}
        onCardClick={data => console.log("Card clicked:", data)}
      />
    </div>
  )
};
