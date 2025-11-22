import type { Meta, StoryObj } from "@storybook/react-vite";

import { IUpcomingEventCardData } from "../UpcomingEventCard";
import { UpcomingEventsList } from "./UpcomingEventsList";

const meta = {
  title: "Components/UpcomingEventsList",
  component: UpcomingEventsList,
  parameters: {
    layout: "padded"
  },
  decorators: [
    Story => (
      <div className='yl:max-w-sm'>
        <Story />
      </div>
    )
  ],
  tags: ["autodocs"]
} satisfies Meta<typeof UpcomingEventsList>;

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

const mockEvents: IUpcomingEventCardData[] = [
  {
    title:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    eventURL: "/meetups/react-meetup/events/react-workshop",
    dateAndTime: "2025-10-31T20:12:00Z",
    summary:
      "Learn advanced React patterns and best practices in this hands-on workshop."
  },
  {
    title: "React Advanced Workshop",
    eventURL: "/meetups/react-meetup/events/react-workshop",
    dateAndTime: "2025-10-31T20:12:00Z",
    summary:
      "Learn advanced React patterns and best practices in this hands-on workshop."
  },
  {
    title: "TypeScript Deep Dive",
    eventURL: "/meetups/typescript-meetup/events/typescript-deep-dive",
    dateAndTime: "2025-11-05T18:00:00Z",
    summary:
      "Master TypeScript with real-world examples and type-safe patterns."
  },
  {
    title: "Node.js Performance Optimization",
    eventURL: "/meetups/nodejs-meetup/events/nodejs-performance",
    dateAndTime: "2025-11-12T19:30:00Z",
    summary: "Optimize your Node.js applications for production environments."
  },
  {
    title: "GraphQL API Design",
    eventURL: "/meetups/graphql-meetup/events/graphql-api",
    dateAndTime: "2025-11-18T17:00:00Z",
    summary: "Design and implement scalable GraphQL APIs."
  },
  {
    title: "Docker & Kubernetes Workshop",
    eventURL: "/meetups/docker-meetup/events/docker-kubernetes",
    dateAndTime: "2025-11-25T20:00:00Z",
    summary: "Learn container orchestration with Docker and Kubernetes."
  }
];

export const Default: Story = {
  args: {
    events: mockEvents,
    NavLink: mockNavLink as never,
    onEventClick: data => console.log("Event clicked:", data)
  }
};

export const WithViewAll: Story = {
  args: {
    events: mockEvents,
    NavLink: mockNavLink as never,
    viewAllUrl: "/events",
    onEventClick: data => console.log("Event clicked:", data),
    onViewAllClick: () => console.log("View All clicked")
  }
};

export const CustomTitle: Story = {
  args: {
    events: mockEvents,
    NavLink: mockNavLink as never,
    title: "Featured Events",
    onEventClick: data => console.log("Event clicked:", data)
  }
};

export const LimitedEvents: Story = {
  args: {
    events: mockEvents,
    NavLink: mockNavLink as never,
    maxEvents: 3,
    viewAllUrl: "/events",
    onEventClick: data => console.log("Event clicked:", data)
  }
};

export const EmptyState: Story = {
  args: {
    events: [],
    NavLink: mockNavLink as never
  }
};

export const CustomEmptyMessage: Story = {
  args: {
    events: [],
    NavLink: mockNavLink as never,
    emptyMessage: "Check back soon for new events!"
  }
};

export const Loading: Story = {
  args: {
    events: mockEvents,
    NavLink: mockNavLink as never,
    isLoading: true
  }
};

export const SingleEvent: Story = {
  args: {
    events: [mockEvents[0]!],
    NavLink: mockNavLink as never,
    onEventClick: data => console.log("Event clicked:", data)
  }
};
