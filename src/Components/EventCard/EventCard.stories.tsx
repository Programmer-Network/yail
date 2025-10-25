import { Meta, StoryObj } from "@storybook/react-vite";
import { NavLink } from "react-router-dom";

import { EventCard } from ".";
import { PillVariant } from "../Pill/Pill.types";
import { IEventCardData } from "./EventCard.types";
import { getDefaultEventPills } from "./EventCard.utils";

const action =
  (name: string) =>
  (...args: any[]) => {
    console.log(`${name}:`, args);
  };

const EventCardStories: Meta<typeof EventCard> = {
  title: "Components/EventCard",
  component: EventCard,
  decorators: [
    Story => {
      return (
        <div
          style={{
            maxWidth: "800px",
            width: "100%",
            margin: "0 auto"
          }}
        >
          <Story />
        </div>
      );
    }
  ],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["default", "compact", "featured"]
    },
    isLoading: {
      control: { type: "boolean" }
    },
    showBookmark: {
      control: { type: "boolean" }
    },
    isBookmarked: {
      control: { type: "boolean" }
    },
    showShare: {
      control: { type: "boolean" }
    }
  }
};

type Story = StoryObj<typeof EventCard>;

const defaultEventData: IEventCardData = {
  title: "React Server Components Deep Dive",
  titleUrl: "/events/react-server-components-deep-dive",
  description:
    "A deep dive into the guts of RSC and the new Next.js app router. We'll explore the fundamentals, performance implications, and real-world applications.",
  author: {
    name: "John Doe",
    url: "/authors/john-doe",
    avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=John"
  },
  date: "Oct 28, 2025",
  tags: [
    { name: "react", url: "/tags/react" },
    { name: "nextjs", url: "/tags/nextjs" },
    { name: "server-components", url: "/tags/server-components" },
    { name: "performance", url: "/tags/performance" }
  ],
  pills: getDefaultEventPills("live-stream", "published"),
  isRead: false,
  isFeatured: false,
  // Event-specific fields
  dateAndTime: new Date("2025-10-28T18:00:00Z"),
  timezone: "Europe/Berlin",
  eventType: "live-stream",
  locationType: "remote",
  location: "Online",
  eventUrl: "https://zoom.us/j/123456789",
  spots: 150,
  spotsRemaining: 108,
  duration: 120,
  status: "published",
  attendeesCount: 42,
  attendees: [
    {
      id: 1,
      name: "Alice",
      avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alice"
    },
    {
      id: 2,
      name: "Bob",
      avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Bob"
    },
    {
      id: 3,
      name: "Charlie",
      avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Charlie"
    }
  ]
};

export const Default: Story = {
  args: {
    NavLink,
    data: defaultEventData,
    variant: "default",
    showBookmark: false,
    showShare: false,
    onCardClick: action("card-clicked"),
    onAuthorClick: action("author-clicked"),
    onTagClick: action("tag-clicked"),
    onImageClick: action("image-clicked"),
    onBookmark: action("bookmarked"),
    onShare: action("shared"),
    onRegister: action("registered")
  }
};

export const Loading: Story = {
  args: {
    ...Default.args,
    isLoading: true
  }
};

export const LiveEvent: Story = {
  args: {
    ...Default.args,
    data: {
      ...defaultEventData,
      status: "published"
    },
    showBookmark: true,
    showShare: true
  }
};

export const CancelledEvent: Story = {
  args: {
    ...Default.args,
    data: {
      ...defaultEventData,
      title: "Advanced TypeScript Patterns",
      description: "This event has been cancelled by the organizer.",
      pills: getDefaultEventPills("workshop", "cancelled"),
      eventType: "workshop",
      status: "cancelled",
      spotsRemaining: 0,
      attendeesCount: 0,
      attendees: []
    }
  }
};

export const CompletedEvent: Story = {
  args: {
    ...Default.args,
    data: {
      ...defaultEventData,
      title: "State Management Showdown: Zustand vs. Jotai",
      description:
        "Which state manager is right for your next project? Let's find out.",
      pills: getDefaultEventPills("live-stream", "completed"),
      status: "completed",
      spotsRemaining: 0,
      attendeesCount: 18,
      attendees: [
        {
          id: 1,
          name: "Alice",
          avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alice"
        },
        {
          id: 2,
          name: "Bob",
          avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Bob"
        }
      ]
    }
  }
};

export const DraftEvent: Story = {
  args: {
    ...Default.args,
    data: {
      ...defaultEventData,
      title: "Upcoming Workshop: Advanced React Patterns",
      description: "This is a draft event that hasn't been published yet.",
      pills: getDefaultEventPills("workshop", "draft"),
      eventType: "workshop",
      status: "draft",
      spotsRemaining: 50,
      attendeesCount: 0,
      attendees: []
    }
  }
};

export const LowSpotsRemaining: Story = {
  args: {
    ...Default.args,
    data: {
      ...defaultEventData,
      title: "Hackathon: Build a Full-Stack App in 24 Hours",
      pills: getDefaultEventPills("hackathon", "published", [
        { title: "FILLING FAST", variant: PillVariant.WARNING }
      ]),
      eventType: "hackathon",
      spots: 50,
      spotsRemaining: 3,
      attendeesCount: 47,
      attendees: [
        {
          id: 1,
          name: "Alice",
          avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alice"
        },
        {
          id: 2,
          name: "Bob",
          avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Bob"
        },
        {
          id: 3,
          name: "Charlie",
          avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Charlie"
        }
      ]
    }
  }
};

export const SoldOutEvent: Story = {
  args: {
    ...Default.args,
    data: {
      ...defaultEventData,
      title: "Workshop: Advanced TypeScript Patterns",
      pills: getDefaultEventPills("workshop", "published", [
        { title: "SOLD OUT", variant: PillVariant.ERROR }
      ]),
      eventType: "workshop",
      spots: 20,
      spotsRemaining: 0,
      attendeesCount: 20,
      attendees: [
        {
          id: 1,
          name: "Alice",
          avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alice"
        },
        {
          id: 2,
          name: "Bob",
          avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Bob"
        },
        {
          id: 3,
          name: "Charlie",
          avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Charlie"
        }
      ]
    }
  }
};

export const OnsiteEvent: Story = {
  args: {
    ...Default.args,
    data: {
      ...defaultEventData,
      title: "Tech Hub Berlin Meetup",
      pills: getDefaultEventPills("meetup", "published"),
      eventType: "meetup",
      locationType: "onsite",
      location: "Tech Hub Berlin",
      eventUrl: undefined,
      spots: 50,
      spotsRemaining: 32,
      attendeesCount: 18,
      attendees: [
        {
          id: 1,
          name: "Alice",
          avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alice"
        },
        {
          id: 2,
          name: "Bob",
          avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Bob"
        }
      ]
    }
  }
};

export const HybridEvent: Story = {
  args: {
    ...Default.args,
    data: {
      ...defaultEventData,
      title: "Hybrid Workshop: React Performance Optimization",
      pills: getDefaultEventPills("workshop", "published"),
      eventType: "workshop",
      locationType: "hybrid",
      location: "Tech Hub Berlin + Online",
      eventUrl: "https://zoom.us/j/987654321",
      spots: 100,
      spotsRemaining: 75,
      attendeesCount: 25,
      attendees: [
        {
          id: 1,
          name: "Alice",
          avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alice"
        },
        {
          id: 2,
          name: "Bob",
          avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Bob"
        },
        {
          id: 3,
          name: "Charlie",
          avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Charlie"
        }
      ]
    }
  }
};

export const EventStartingSoon: Story = {
  args: {
    ...Default.args,
    data: {
      ...defaultEventData,
      title: "Live Coding Session: Building a Real-time Chat App",
      pills: getDefaultEventPills("live-stream", "published", [
        { title: "STARTING SOON", variant: PillVariant.SUCCESS }
      ]),
      dateAndTime: new Date(Date.now() + 2 * 60 * 60 * 1000), // 2 hours from now
      spots: 200,
      spotsRemaining: 150,
      attendeesCount: 50,
      attendees: [
        {
          id: 1,
          name: "Alice",
          avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alice"
        },
        {
          id: 2,
          name: "Bob",
          avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Bob"
        },
        {
          id: 3,
          name: "Charlie",
          avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Charlie"
        }
      ]
    }
  }
};

export const PastEvent: Story = {
  args: {
    ...Default.args,
    data: {
      ...defaultEventData,
      title: "Completed Workshop: GraphQL Best Practices",
      pills: getDefaultEventPills("workshop", "completed"),
      eventType: "workshop",
      dateAndTime: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000), // 7 days ago
      status: "completed",
      spots: 30,
      spotsRemaining: 0,
      attendeesCount: 30,
      attendees: [
        {
          id: 1,
          name: "Alice",
          avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alice"
        },
        {
          id: 2,
          name: "Bob",
          avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Bob"
        }
      ]
    }
  }
};

export const LongDurationEvent: Story = {
  args: {
    ...Default.args,
    data: {
      ...defaultEventData,
      title: "All-Day Hackathon: Build the Next Big Thing",
      pills: getDefaultEventPills("hackathon", "published", [
        { title: "FREE", variant: PillVariant.SUCCESS }
      ]),
      eventType: "hackathon",
      duration: 480, // 8 hours
      spots: 100,
      spotsRemaining: 60,
      attendeesCount: 40,
      attendees: [
        {
          id: 1,
          name: "Alice",
          avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alice"
        },
        {
          id: 2,
          name: "Bob",
          avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Bob"
        },
        {
          id: 3,
          name: "Charlie",
          avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Charlie"
        }
      ]
    }
  }
};

export const WithFooterActions: Story = {
  args: {
    ...Default.args,
    footerActions: [
      {
        label: "Register",
        onClick: e => {
          action("register-clicked")(e);
          window.alert("Register clicked");
        },
        variant: "primary"
      },
      {
        label: "Share",
        onClick: e => {
          action("share-clicked")(e);
          window.alert("Share clicked");
        },
        variant: "outlined"
      }
    ]
  }
};

export const WithCoverImage: Story = {
  args: {
    ...Default.args,
    data: {
      ...defaultEventData,
      title: "Building Modern Web Apps with React",
      description:
        "Learn how to build scalable, performant web applications using the latest React features and best practices.",
      image: {
        src: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=450&fit=crop&crop=entropy&auto=format&q=80",
        alt: "Modern web development workspace",
        aspectRatio: "16:9",
        lazy: false
      }
    }
  }
};

export default EventCardStories;
